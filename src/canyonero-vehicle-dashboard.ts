import { mdiChevronLeft, mdiChevronRight, mdiClose } from '@mdi/js';
import { formatDateTime, forwardHaptic, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { LitElement, html, TemplateResult, PropertyValues, CSSResultGroup, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

import './components';

import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { CanyoneroRemoteControl, CanyoneroButtons, CanyoneroMap } from './components/';
import { CardItem, cardTypes } from './const/data-keys';
import { IMAGE } from './const/imgconst';
import { servicesCtrl } from './const/remote-control-keys';
import * as StateMapping from './const/state-mapping';
import styles from './css/styles.css';
import { localize } from './localize/localize';
import {
  HomeAssistant,
  VehicleCardConfig,
  EntityConfig,
  VehicleEntity,
  ButtonCardEntity,
  CardTypeConfig,
  CustomButtonEntity,
  defaultConfig,
  BaseButtonConfig,
  VehicleEntities,
  SECTION_DEFAULT_ORDER,
} from './types';
import { HEADER_ACTION, PreviewCard, MapData, SECTION } from './types';
import { FrontendLocaleData } from './types/ha-frontend/data/frontend-local-data';
import { fireEvent } from './types/ha-frontend/fire-event';
import { LovelaceCardEditor, LovelaceCardConfig, LovelaceCard } from './types/ha-frontend/lovelace/lovelace';
import {
  handleCardFirstUpdated,
  getCarEntity,
  handleCardSwipe,
  isEmpty,
  Create,
  isDarkColor,
  _getSingleCard,
  applyThemesOnElement,
} from './utils';
import { getAddedButton, getDefaultButton, createCardElement, createCustomButtons } from './utils';
import { socQuality, validSocQualityConfig } from './utils/soc-quality';

const ROWPX = 58;

@customElement('canyonero-vehicle-dashboard')
export class Canyonero extends LitElement implements LovelaceCard {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('canyonero-vehicle-dashboard-editor');
  }
  // Properties
  @property({ attribute: false })
  set hass(hass: HomeAssistant) {
    if (!hass) return;
    this._hass = hass;

    if (this._buttonReady && this.buttonCards) {
      Object.keys(this.buttonCards).forEach((key) => {
        const customCard = this.buttonCards[key].custom_card;
        const useCustom = this.buttonCards[key].card_type === 'custom';
        if (useCustom && !isEmpty(customCard)) {
          customCard.forEach((card) => {
            card.hass = hass;
          });
        }
      });
    }
  }

  @property({ attribute: false }) public _hass!: HomeAssistant;
  @property({ attribute: false }) public config!: VehicleCardConfig;
  @property({ type: Boolean }) public editMode: boolean = false;
  @property({ attribute: false }) public layout?: string;

  // Vehicle entities and attributes
  @state() vehicleEntities: VehicleEntities = {};
  @state() public buttonCards: Record<string, ButtonCardEntity> = {};
  @state() public _entityNotFound: boolean = false;

  @state() DataKeys: Record<string, CardItem[]> = {};
  /** Device manufacturer string, resolved during first update. Used by the
   *  brand header to render the right wordmark/logo styling. */
  @state() public _brandManufacturer: string = '';
  @state() MapData?: MapData;
  @state() PreviewCard: PreviewCard = {};
  // Active card type
  @state() public _currentCardType: string | null = null;
  @state() private _activeSubCard: Set<string> = new Set();
  @state() private chargingInfoVisible!: boolean;

  // Single Map Card
  @state() public _singleMapCard?: LovelaceCardConfig;
  // Preview states
  @state() _currentPreviewType: 'button' | 'card' | 'tire' | null = null;

  // Loading state
  @state() public _loading = true;
  @state() private _buttonReady = false;
  @state() _currentSwipeIndex?: number;
  // Resize observer
  @state() _connected = false;

  // Misc
  @state() mainSectionItems: Record<string, HTMLElement> = {};
  @state() _cardPreviewId?: string;
  @state() _cardId?: string | null;
  private _calculateCardHeight?: number;
  // Components
  @query('canyonero-buttons') vehicleButtons!: CanyoneroButtons;
  @query('canyonero-map') vehicleMap!: CanyoneroMap;
  @query('canyonero-remote-control') remoteControl!: CanyoneroRemoteControl;

  connectedCallback(): void {
    super.connectedCallback();
    window.Canyonero = this;

    if (this.editMode) {
      this._loading = false;
      if (this.isEditorPreview) {
        window.addEventListener('editor-event', this.handleEditorEvents.bind(this));
      }
    }
    this._connected = true;
  }

  disconnectedCallback(): void {
    window.removeEventListener('editor-event', this.handleEditorEvents.bind(this));
    this._connected = false;

    super.disconnectedCallback();
  }

  public static getStubConfig = (hass: HomeAssistant): Record<string, unknown> => {
    const entity = getCarEntity(hass);
    console.log('entity', entity);
    return {
      ...defaultConfig,
      entity: entity,
      images: [],
    };
  };

  public setConfig(config: VehicleCardConfig): void {
    if (config.soc_quality && !validSocQualityConfig(config.soc_quality)) {
      throw new Error('soc_quality requires a positive max_age_minutes, optional positive capacity_kwh and target_soc from 0 to 100.');
    }
    this.config = {
      ...config,
    };
  }

  get userLang(): string {
    if (!this.config.selected_language || this.config.selected_language === 'system') {
      return this._hass.language;
    }
    return this.config.selected_language;
  }

  private get baseCardTypes(): CardTypeConfig[] {
    return cardTypes(this.userLang);
  }

  private get isCharging(): boolean {
    // Prefer binary_sensor.<vin>_is_charging; fall back to charging_state == 'charging'.
    const isChargingEntityId = this.vehicleEntities.isCharging?.entity_id;
    if (isChargingEntityId) return this.getBooleanState(isChargingEntityId);
    const chargingStateEntity = this.vehicleEntities.chargingState?.entity_id;
    if (chargingStateEntity) return this.getEntityState(chargingStateEntity) === 'charging';
    return false;
  }

  get carVinNumber(): string {
    if (!this.config.entity) return '';
    return this.getEntityAttribute(this.config.entity, 'vin');
  }

  get isDark(): boolean {
    if (this.config?.selected_theme?.mode === 'dark') {
      return true;
    } else if (this.config?.selected_theme?.mode === 'light') {
      return false;
    }
    return this._hass.selectedTheme?.dark ?? this._isDarkTheme();
  }

  get _locale(): FrontendLocaleData {
    const locale = this._hass.locale;
    const language = this.userLang.includes('_') ? this.userLang.replace('_', '-') : this.userLang;
    const newLocale = {
      ...locale,
      language,
    };
    return newLocale;
  }

  get isEditorPreview(): boolean {
    const parentElementClassPreview = this.offsetParent?.classList.contains('element-preview');
    return parentElementClassPreview || false;
  }

  public static get styles(): CSSResultGroup {
    return styles;
  }

  protected async willUpdate(changedProps: PropertyValues): Promise<void> {
    super.willUpdate(changedProps);

    if (
      changedProps.has('config') &&
      this.config.map_popup_config?.single_map_card === true &&
      this.config?.device_tracker &&
      this.config.extra_configs?.maptiler_api_key
    ) {
      if (!this._singleMapCard) {
        this.createSingleMapCard();
      }
    }

    if (changedProps.has('config') && this.config.selected_theme) {
      const oldTheme = changedProps.get('config')?.selected_theme?.theme;
      const newTheme = this.config.selected_theme.theme;
      if (oldTheme !== newTheme) {
        this.applyTheme(newTheme);
      }
    }
  }

  protected async firstUpdated(changedProps: PropertyValues): Promise<void> {
    super.firstUpdated(changedProps);
    await new Promise((resolve) => setTimeout(resolve, 0));
    handleCardFirstUpdated(this);
    this._setUpButtonCards();
    this._setUpPreview();
  }

  protected async updated(changedProps: PropertyValues): Promise<void> {
    super.updated(changedProps);

    if (changedProps.has('_currentCardType') && this._currentCardType !== null && !this.editMode) {
      const cardElement = this.shadowRoot?.querySelector('.card-element');
      if (cardElement) {
        handleCardSwipe(cardElement, this.toggleCard.bind(this));
      }
    }
  }

  protected shouldUpdate(_changedProps: PropertyValues): boolean {
    if (_changedProps.has('_currentCardType') && this._currentCardType) {
      this._activeSubCard = new Set<string>();
    }

    // Quality age can change while the anchor value remains unchanged.
    if (this.config?.soc_quality && _changedProps.has('_hass')) return true;
    return hasConfigOrEntityChanged(this, _changedProps, true);
  }

  private async _setUpButtonCards(): Promise<void> {
    if (this._currentPreviewType !== null) return;
    this._buttonReady = false;

    const logging: string[] = [];
    for (const baseCard of this.baseCardTypes) {
      this.buttonCards[baseCard.type] = await getDefaultButton(this._hass, this.config, baseCard);
      logging.push(baseCard.type);
      // this.buttonCards = buttonCards;
      // console.log('Button Cards ready:', logging);
    }

    if (this.config.added_cards && Object.keys(this.config.added_cards).length > 0) {
      for (const [key, card] of Object.entries(this.config.added_cards)) {
        if (card) {
          this.buttonCards[key] = await getAddedButton(this._hass, card, key);
        }
        logging.push(key);
      }
    }

    // console.log('%cButton ready: %O', 'color: #bada55', logging);
    this._buttonReady = true;
    this._calculateCardHeight = this.getGridRowSize() * ROWPX;
    // console.log('Card height calculated', this._calculateCardHeight);
    setTimeout(() => {
      this._loading = false;
    }, 2000);
  }

  private async _setUpPreview(): Promise<void> {
    if (!this._currentPreviewType && this.config?.card_preview) {
      this._currentPreviewType = 'card';
    } else if (!this._currentPreviewType && this.config?.btn_preview) {
      this._currentPreviewType = 'button';
    } else if (!this._currentPreviewType && this.config?.tire_preview) {
      this._currentPreviewType = 'tire';
    }

    if (this._currentPreviewType !== null) {
      await this._configurePreview(this._currentPreviewType);
    } else {
      this._currentPreviewType = null;
    }
  }

  private async _configurePreview(cardType: 'button' | 'card' | 'tire' | null): Promise<void> {
    if (!cardType && !this.isEditorPreview) return;

    let cardConfig: LovelaceCardConfig[] | BaseButtonConfig = [];
    let cardElement: any;

    switch (cardType) {
      case 'button':
        cardConfig = this.config?.btn_preview as BaseButtonConfig;
        if (!cardConfig) return;
        cardElement = await createCustomButtons(this._hass, cardConfig);
        if (!cardElement) return;
        this.PreviewCard!.buttonPreview = cardElement;
        break;
      case 'card':
        cardConfig = this.config?.card_preview as LovelaceCardConfig[];
        if (!cardConfig) return;
        cardElement = await createCardElement(this._hass, cardConfig);
        if (!cardElement) return;
        this.PreviewCard!.cardPreview = cardElement;
        break;
      case 'tire':
        this._currentPreviewType = 'tire';
        break;
      default:
        return;
    }

    if (cardType === null) {
      this._resetCardPreview(); // Reset preview
      return;
    }

    this._currentPreviewType = cardType;
    this.requestUpdate();
  }

  private _resetCardPreview(): void {
    this.PreviewCard = {} as PreviewCard;
    this._currentPreviewType = null;
    this.requestUpdate();
  }

  public localize = (string: string, search = '', replace = ''): string => {
    return localize(string, this.userLang, search, replace);
  };

  private createSingleMapCard() {
    setTimeout(async () => {
      this._singleMapCard = (await _getSingleCard(this)) as LovelaceCardConfig;
      // panel-layout padding hack from the Mercedes original targeted
      // <extra-map-card>'s shadow root; we now use plain HA <map> so the
      // tweak is no longer needed.
    }, 0);
  }

  /* -------------------------------------------------------------------------- */
  /* MAIN RENDER                                                                */
  /* -------------------------------------------------------------------------- */

  // https://lit.dev/docs/components/rendering/
  protected render(): TemplateResult {
    if (!this.config || !this._hass || !this.config.entity || this._entityNotFound) {
      return this._showWarning('No entity provided');
    }

    if (this._currentPreviewType !== null && this.isEditorPreview) {
      return this._renderCardPreview();
    }

    if (this.config.map_popup_config?.single_map_card === true && this._singleMapCard !== undefined) {
      return html`${this._singleMapCard}`;
    }

    const loadingEl = html`
      <div class="loading-image" style="height: ${this._calculateCardHeight}px">
        <img src="${IMAGE.LOADING}" alt="Loading" />
      </div>
    `;

    const noHeader = this.config.name?.trim() === '' || this.config.name === undefined;
    const headerTitle = noHeader ? nothing : html`<header><h1>${this.config.name}</h1></header>`;

    const mainContent = html`${headerTitle}
    ${this._currentCardType !== null ? this._renderCustomCard() : this._renderMainCard()}`;

    return html`
      <ha-card style=${this._computeCardStyles()} class=${this._computeClasses()} ?no-header=${noHeader}>
        ${this._loading ? loadingEl : mainContent}
      </ha-card>
    `;
  }

  private _renderCardPreview(): TemplateResult {
    if (!this._currentPreviewType) return html``;
    const type = this._currentPreviewType;
    const typeMap = {
      button: Create.BtnPreview(this.PreviewCard!.buttonPreview as CustomButtonEntity, this._hass),
      card: html`<ha-card class="preview-card">${this.PreviewCard!.cardPreview}</ha-card>`,
      tire: this._renderDefaultTyreCard(),
    };

    return typeMap[type];
  }

  private _renderMainCard(): TemplateResult {
    const sectionToRender = this.config.extra_configs?.section_order ?? [...SECTION_DEFAULT_ORDER];
    // render by config order or default order
    // console.log('sectionToRender', sectionToRender);
    return html`
      <main id="main-wrapper">
        ${sectionToRender.map((section) => {
          switch (section) {
            case SECTION.HEADER_INFO:
              return this._renderHeaderInfo();
            case SECTION.IMAGES_SLIDER:
              return this._renderHeaderSlides();
            case SECTION.MINI_MAP:
              return this._renderMap();
            case SECTION.BUTTONS:
              return this._renderButtons();
            default:
              return '';
          }
        })}
      </main>
    `;
  }

  private _renderHeaderInfo(): TemplateResult {
    if (!this.config?.show_header_info && this.config?.show_header_info !== undefined) return html``;
    return html`
      <div id=${SECTION.HEADER_INFO} class="header-info-box">
        ${this._renderBrandHeader()} ${this._renderInfoBox()} ${this._renderChargingInfo()} ${this._renderRangeInfo()}
      </div>
    `;
  }

  /**
   * VAG brand header — brand wordmark + model + VIN-last-6 + online state.
   * Markenrechte: we deliberately render the brand as a styled text wordmark
   * (AUDI / VW / ŠKODA / SEAT / CUPRA / PORSCHE / VW US) plus an MDI car icon,
   * rather than shipping copyrighted manufacturer logos. Users that want a
   * real logo can set `brand_logo_url` in their config and it overrides
   * the wordmark.
   */
  private _renderBrandHeader(): TemplateResult {
    const customLogo = (this.config as any).brand_logo_url as string | undefined;
    const rawModel = this.config.model_name || '';
    const vin = this.carVinNumber || '';
    const vinShort = vin ? vin.slice(-6) : '';

    // Some VAG-Connect devices report the VIN in `device.model` (no clean
    // marketing name available from the backend). When that happens the
    // header would otherwise read "AUDI WAUZZZF43JA027519". Detect that
    // shape (17-char alphanumeric, no spaces) and suppress it so the
    // sub-line VIN ··· label carries the info instead.
    const looksLikeVin = /^[A-HJ-NPR-Z0-9]{17}$/i.test(rawModel.replace(/\s/g, ''));
    const modelName = looksLikeVin ? '' : rawModel;

    const brand = (this._brandManufacturer || '').toLowerCase();
    const isOnline = this.vehicleEntities.isOnline?.entity_id
      ? this.getBooleanState(this.vehicleEntities.isOnline.entity_id)
      : undefined;

    const brandWordmark = (() => {
      // VAG group
      if (brand.includes('audi')) return 'AUDI';
      if (brand.includes('škoda') || brand.includes('skoda')) return 'ŠKODA';
      if (brand.includes('cupra')) return 'CUPRA';
      if (brand.includes('seat')) return 'SEAT';
      if (brand.includes('porsche')) return 'PORSCHE';
      if (brand.includes('volkswagen'))
        return brand.includes('us') || brand.includes('na') ? 'VW US' : 'VW';
      // Major non-VAG makes
      if (brand.includes('tesla')) return 'TESLA';
      if (brand.includes('bmw')) return 'BMW';
      if (brand.includes('mercedes') || brand.includes('benz')) return 'MERCEDES';
      if (brand.includes('toyota')) return 'TOYOTA';
      if (brand.includes('volvo')) return 'VOLVO';
      if (brand.includes('ford')) return 'FORD';
      if (brand.includes('hyundai')) return 'HYUNDAI';
      if (brand.includes('kia')) return 'KIA';
      if (brand.includes('nissan')) return 'NISSAN';
      if (brand.includes('mazda')) return 'MAZDA';
      if (brand.includes('honda')) return 'HONDA';
      if (brand.includes('subaru')) return 'SUBARU';
      // Unknown brand → show the literal manufacturer string (uppercased,
      // capped at 12 chars so it fits the header). Better than a generic
      // "CAR" — at least the user sees what HA reported.
      if (brand) return brand.toUpperCase().slice(0, 12);
      return 'CAR';
    })();

    return html`
      <div
        class="vag-brand-header"
        brand="${brandWordmark.toLowerCase().replace(/\s/g, '_')}"
        @click=${this._handleBrandHeaderClick}
      >
        <div class="brand-logo-slot">
          ${customLogo
            ? html`<img src=${customLogo} alt="Brand logo" />`
            : html`<span class="brand-wordmark">${brandWordmark}</span>`}
        </div>
        <div class="brand-meta">
          <span class="brand-model">${modelName || this.localize('card.common.vehicle')}</span>
          ${vinShort ? html`<span class="brand-vin">VIN ···${vinShort}</span>` : ''}
        </div>
        ${isOnline !== undefined
          ? html`<div class="brand-online" ?online=${isOnline} title=${isOnline ? 'online' : 'offline'}>
              <ha-icon icon=${isOnline ? 'mdi:wifi' : 'mdi:wifi-off'}></ha-icon>
            </div>`
          : ''}
      </div>
    `;
  }

  /**
   * Triple-click the brand header → rotating easter-egg quote toast.
   * Picks one quote at random from the favourite-shows trifecta. Pure
   * cosmetic, never affects state.
   */
  private _brandHeaderClickCount = 0;
  private _brandHeaderClickTimer?: ReturnType<typeof setTimeout>;
  private _handleBrandHeaderClick = (): void => {
    this._brandHeaderClickCount++;
    clearTimeout(this._brandHeaderClickTimer);
    if (this._brandHeaderClickCount >= 3) {
      this._brandHeaderClickCount = 0;
      const quotes = [
        'Canyonero! Canyonero!',
        'Legen… wait for it… DARY!',
        'Bazinga.',
        'Suit up.',
        "D'oh!",
        'Knock-knock-knock, Penny.',
        'Have you met Ted?',
        'Mmm… donuts.',
        'Hi diddly-ho, neighbour!',
        'Soft kitty, warm kitty…',
      ];
      const q = quotes[Math.floor(Math.random() * quotes.length)];
      const toast = document.createElement('div');
      toast.textContent = q;
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--primary-color, #b58450)',
        color: 'var(--text-primary-color, #fff)',
        padding: '10px 18px',
        borderRadius: '24px',
        fontWeight: '600',
        zIndex: '99999',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        opacity: '0',
        transition: 'opacity 250ms ease',
      });
      document.body.appendChild(toast);
      requestAnimationFrame(() => (toast.style.opacity = '1'));
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 2200);
      return;
    }
    this._brandHeaderClickTimer = setTimeout(() => (this._brandHeaderClickCount = 0), 600);
  };

  private _renderInfoBox(): TemplateResult {
    const isCharging = this.isCharging;
    const isServiceControl = this.config.enable_services_control !== false;
    const justify = isCharging && isServiceControl ? 'space-evenly' : 'center';

    // VAG header indicators: lock state + online state (was Mercedes lock + park brake).
    const defaultIndicData = this.createDataArray([{ key: 'doorsLocked' }, { key: 'isOnline' }]);

    // Helper function to render items
    const renderItem = (icon: string, label: string, onClick: () => void, isActive: boolean = false) => html`
      <div class="item active-btn" @click=${onClick} ?active=${isActive}>
        <ha-icon icon=${icon}></ha-icon>
        <div class="added-item-arrow">
          <span>${label}</span>
          <div class="subcard-icon" ?active=${isActive}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>
      </div>
    `;

    // Render default indicators
    const defaultIndicators = defaultIndicData.map(
      ({ state, icon, key }) => html`
        <div class="item active-btn" @click=${() => this.toggleMoreInfo(this.vehicleEntities[key]?.entity_id)}>
          <ha-icon .icon=${icon}></ha-icon>
          <span>${state}</span>
        </div>
      `
    );

    // Render added charging info if charging
    const addedChargingInfo = this.isCharging
      ? renderItem(
          'mdi:ev-station',
          this.localize('card.common.stateCharging'),
          () => (this.chargingInfoVisible = !this.chargingInfoVisible),
          this.chargingInfoVisible
        )
      : nothing;

    // Render service control if enabled
    const serviceControl =
      this.config.enable_services_control !== false
        ? renderItem('mdi:car-cog', this.localize('card.common.titleServices'), () =>
            this.toggleCardFromButtons('servicesCard')
          )
        : nothing;

    // Combine all parts and render
    return html`
      <div class="info-box" style=${`justify-content: ${justify}`}>
        ${defaultIndicators} ${serviceControl} ${addedChargingInfo}
      </div>
    `;
  }

  private _renderChargingInfo(): TemplateResult {
    if (!this.DataKeys.chargingOverview) return html``;
    const chargingOverview = this.DataKeys.chargingOverview;
    const chargingData = this.createDataArray(chargingOverview);
    const chargingClass = this.chargingInfoVisible ? 'info-box charge active' : 'info-box charge';

    return html`
      <div class=${chargingClass} .hidden=${this.isCharging}>
        ${chargingData.map(({ name, state, icon }) => {
          if (state) {
            return html`
              <div class="item charge">
                <div class="icon-state">
                  <ha-icon .icon=${icon}></ha-icon>
                  <span>${state}</span>
                </div>
                <div class="item-name">
                  <span>${name}</span>
                </div>
              </div>
            `;
          } else {
            return html``;
          }
        })}
      </div>
    `;
  }

  private _renderRangeInfo(): TemplateResult | void {
    if (this.chargingInfoVisible) return;
    const getEntityInfo = (entity: string | undefined) => {
      if (!entity) return null;
      const state = parseInt(this.getEntityState(entity));
      const stateDisplay = this.getStateDisplay(entity);
      return { state, stateDisplay };
    };

    // VAG: rangeLiquid -> rangeCombustion. soc + rangeElectric remain.
    const entities = ['fuelLevel', 'rangeCombustion', 'rangeElectric', 'soc'];
    const [fuelInfo, rangeLiquidInfo, rangeElectricInfo, socInfo] = entities.map((entity) =>
      getEntityInfo(this.vehicleEntities[entity]?.entity_id)
    );

    const renderInfoBox = (icon: string, state: number, fuelInfo: string, rangeInfo: string, eletric: boolean) => html`
      <div class="info-box range">
        <div class="item">
          <ha-icon icon="${icon}"></ha-icon>
          <div><span>${fuelInfo}</span></div>
        </div>
        <div class="fuel-wrapper">
          <div
            class="fuel-level-bar"
            ?electric=${eletric}
            ?charging=${eletric && this.isCharging}
            style="--vic-range-width: ${state}%;"
          ></div>
        </div>
        <div class="item">
          <span>${rangeInfo}</span>
        </div>
      </div>
    `;

    const renderBothInfoBoxes = () =>
      html` ${fuelInfo && rangeLiquidInfo
        ? renderInfoBox(
            'mdi:gas-station',
            fuelInfo.state!,
            fuelInfo.stateDisplay!,
            rangeLiquidInfo.stateDisplay!,
            false
          )
        : ''}
      ${socInfo && rangeElectricInfo
        ? renderInfoBox('mdi:ev-station', socInfo.state!, socInfo.stateDisplay!, rangeElectricInfo.stateDisplay!, true)
        : ''}`;

    return html`<div class="combined-info-box">${renderBothInfoBoxes()}</div>`;
  }

  private _renderHeaderSlides(): TemplateResult {
    if (!this.config.images || (!this.config?.show_slides && this.config.show_slides !== undefined)) return html``;

    return html`
      <div id=${SECTION.IMAGES_SLIDER}>
        <canyonero-header-slide .config=${this.config} .editMode=${this.editMode}></canyonero-header-slide>
      </div>
    `;
  }

  private _renderMap(): TemplateResult | void {
    const config = this.config;
    const deviceTracker = config.device_tracker;
    const deviceState = this.getEntityState(deviceTracker);
    const isDark = this._isDarkTheme();
    if (!config.show_map) {
      return;
    }
    if ((!config.device_tracker || /(unknown|unavailable)/.test(deviceState) || !deviceState) && config.show_map) {
      return this._showWarning('No device_tracker entity provided or entity is unavailable');
    }
    return html`
      <div id=${SECTION.MINI_MAP}>
        <canyonero-map .hass=${this._hass} .mapData=${this.MapData!} .card=${this} .isDark=${isDark}></canyonero-map>
      </div>
    `;
  }

  // Eco-chart was Mercedes-only (mbapi2020 ecoScore* sensors). VAG Connect
  // does not expose driving-style eco-scores, so this slot was repurposed
  // for Service & Diagnostics in data-keys.ts. The render hook stays as a
  // no-op so that markup referencing it keeps working until the
  // Service-card render is wired up in Phase D.
  private _renderEcoChart(): TemplateResult {
    return html``;
  }

  private _renderButtons(): TemplateResult {
    if (this.config?.show_buttons === false || !this._buttonReady) return html``;
    const notHidden = Object.entries(this.buttonCards).filter(([, value]) => !value.button.hidden);
    const buttonCards = Object.fromEntries(notHidden);
    const config = this.config;
    return html`
      <div id=${SECTION.BUTTONS}>
        <canyonero-buttons
          .hass=${this._hass}
          .component=${this}
          ._config=${config}
          ._buttons=${buttonCards}
          ._cardCurrentSwipeIndex=${this._currentSwipeIndex}
        ></canyonero-buttons>
      </div>
    `;
  }

  private _renderCustomCard(): TemplateResult {
    if (!this._currentCardType) return html``;

    const cardConfigMap = {
      tripCards: this._renderDefaultTripCard(),
      vehicleCards: this._renderDefaultVehicleCard(),
      ecoCards: this._renderDefaultEcoCard(),
      tyreCards: this._renderDefaultTyreCard(),
      servicesCard: this._renderServiceControl(),
      emptyCustom: this._showWarning('No custom card provided'),
    };

    const key = this._currentCardType;
    const defaultType = (key: string) => this.buttonCards[key]?.card_type ?? 'default';
    let renderCard: TemplateResult | LovelaceCardConfig[] | void;
    if (key === 'servicesCard') {
      renderCard = cardConfigMap[key];
    } else {
      const selectedCard = this.buttonCards[key];
      const cardType = selectedCard.card_type ?? 'default';
      const customCard = !isEmpty(selectedCard.custom_card)
        ? selectedCard.custom_card.map((card: LovelaceCardConfig) => card)
        : cardConfigMap.emptyCustom;

      renderCard = cardType === 'custom' ? customCard : cardConfigMap[key];
    }

    const lastCarUpdate = this.config.entity ? this._hass.states[this.config.entity].last_changed : '';
    const formattedDate = formatDateTime(new Date(lastCarUpdate), this._locale);

    const cardHeaderBox = html`<div class="added-card-header">
      <ha-icon-button .label=${'Close'} .path=${mdiClose} class="click-shrink" @click=${() => this.toggleCard('close')}>
      </ha-icon-button>
      <div class="card-toggle">
        <ha-icon-button
          .label=${'Previous'}
          .path=${mdiChevronLeft}
          @click=${() => this.toggleCard('prev')}
          class="click-shrink"
        ></ha-icon-button>

        <ha-icon-button
          .label=${'Next'}
          .path=${mdiChevronRight}
          @click=${() => this.toggleCard('next')}
          class="click-shrink"
        ></ha-icon-button>
      </div>
    </div>`;

    return html`
      <main id="cards-wrapper">
        ${!['servicesCard'].includes(key) ? cardHeaderBox : nothing}
        <section class="card-element" type=${defaultType(key)}>${renderCard}</section>
        ${defaultType(key) === 'default'
          ? html`
              <div class="last-update">
                <span>${this.localize('card.common.lastUpdate')}: ${formattedDate}</span>
              </div>
            `
          : nothing}
      </main>
    `;
  }

  private _renderDefaultTripCard(): TemplateResult | void {
    const { tripOverview, lastTripStats } = this.DataKeys;
    const sections = [
      {
        title: this.localize('card.tripCard.overview'),
        data: this.createDataArray(tripOverview),
        key: '',
      },
      {
        title: this.localize('card.tripCard.lastTrip'),
        data: this.createDataArray(lastTripStats),
        key: 'lastTrip',
      },
    ];
    return html` ${sections.map((section) => this.createItemDataRow(section.title, section.data, section.key))} `;
  }

  private _renderDefaultVehicleCard(): TemplateResult | void {
    const warningsData = this.createDataArray(this.DataKeys.vehicleWarnings);

    const isSubCardVisible = this.isOverviewDataActive() || !this._activeSubCard.has('warnings');

    return html`
      <div class="default-card">
        <div class="data-header">${this.localize('card.vehicleCard.vehicleStatus')}</div>
        <div class="data-box">${this._renderOverviewDataWithSubCard()}</div>
      </div>
      <div class="default-card">
        <div class="data-header">
          <div @click=${() => this.toggleSubCard('warnings')} ?clickable=${true}>
            ${this.localize('card.vehicleCard.vehicleWarnings')}
          </div>
          <div class="subcard-icon" ?active=${!isSubCardVisible} @click=${() => this.toggleSubCard('warnings')}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>
        <div class="data-box" active=${!isSubCardVisible}>
          ${warningsData.map(({ key, icon, state, name, active }) => {
            return html`
              <div class="data-row">
                <div>
                  <ha-icon
                    class="data-icon"
                    .icon="${icon}"
                    @click=${() => this.toggleMoreInfo(this.vehicleEntities[key]?.entity_id)}
                  ></ha-icon>
                  <span>${name}</span>
                </div>
                <div
                  class="data-value-unit"
                  ?error=${active}
                  @click=${() => this.toggleMoreInfo(this.vehicleEntities[key]?.entity_id)}
                >
                  <span>${state}</span>
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  // Service & Diagnostics — was Mercedes Eco. Renders service-due, oil-service,
  // 12V, software version + an OTA/quota/connection sub-section.
  private _renderDefaultEcoCard(): TemplateResult | void {
    const serviceData = this.createDataArray(this.DataKeys.serviceOverview);
    const diagnosticsData = this.createDataArray(this.DataKeys.diagnosticsOverview);
    return html`
      ${this.createItemDataRow(this.localize('card.ecoCard.serviceTitle'), serviceData, '')}
      ${this.createItemDataRow(this.localize('card.ecoCard.diagnosticsTitle'), diagnosticsData, 'diagnostics')}
    `;
  }

  // Battery & Charging — was Mercedes 4-tyre-pressure layout (VAG has no
  // per-wheel pressures). Now renders an SoC donut + charging stats list.
  private _renderDefaultTyreCard(): TemplateResult {
    const chargingData = this.createDataArray(this.DataKeys.chargingOverview);
    const detailsData = this.createDataArray(this.DataKeys.chargingDetails);

    const socEntityId = this.vehicleEntities.soc?.entity_id;
    const targetSocEntityId = this.vehicleEntities.targetSoc?.entity_id;
    const socValue = socEntityId ? parseInt(this.getEntityState(socEntityId)) : NaN;
    const socDisplay = socEntityId ? this.getStateDisplay(socEntityId) : '—';
    const targetSocDisplay = targetSocEntityId ? this.getStateDisplay(targetSocEntityId) : undefined;
    const charging = this.isCharging;

    // Inline SVG donut — same visual rhythm as the original tyre layout
    // (centered visual + ring of values) but VAG-meaningful.
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = Number.isFinite(socValue)
      ? circumference - (Math.max(0, Math.min(100, socValue)) / 100) * circumference
      : circumference;

    return html`
      <div class="default-card">
        <div class="data-header">${this.localize('card.tyreCard.batteryTitle')}</div>
        <div class="battery-donut-wrapper">
          <svg viewBox="0 0 140 140" class="battery-donut" ?charging=${charging}>
            <circle class="battery-track" cx="70" cy="70" r=${radius}></circle>
            <circle
              class="battery-fill"
              cx="70" cy="70" r=${radius}
              stroke-dasharray=${circumference}
              stroke-dashoffset=${dashOffset}
              transform="rotate(-90 70 70)"
            ></circle>
            <text x="70" y="70" text-anchor="middle" dominant-baseline="central" class="battery-soc-text">
              ${socDisplay}
            </text>
            ${targetSocDisplay
              ? html`<text x="70" y="92" text-anchor="middle" dominant-baseline="central" class="battery-target-text">
                  ${this.localize('card.tyreCard.target')} ${targetSocDisplay}
                </text>`
              : ''}
          </svg>
        </div>
      </div>
      ${this._renderSocQuality(socEntityId, targetSocEntityId)}
      ${this.createItemDataRow(this.localize('card.tyreCard.chargingOverview'), chargingData, '')}
      ${this.createItemDataRow(this.localize('card.tyreCard.chargingDetails'), detailsData, 'chargingDetails')}
    `;
  }

  private _renderSocQuality(socEntityId?: string, targetSocEntityId?: string): TemplateResult | typeof nothing {
    if (!this.config.soc_quality) return nothing;
    const quality = socQuality(
      socEntityId ? this._hass.states[socEntityId] : undefined,
      this.config.soc_quality,
      targetSocEntityId ? this._hass.states[targetSocEntityId]?.state : undefined
    );
    const language = this._locale.language;
    const captured = quality.captured && quality.ageMinutes !== null
      ? new Date(quality.captured).toLocaleString(language, { timeZone: this._hass.config.time_zone })
      : this.localize('card.socQuality.noSourceTime');
    const energy = quality.missingKwh === null
      ? this.localize('card.socQuality.noEstimate')
      : `≈ ${quality.missingKwh.toLocaleString(language, { maximumFractionDigits: 1 })} kWh`;
    return html`
      <div class="default-card" role="status">
        <div class="data-header">${this.localize('card.socQuality.title')}</div>
        <p>${this.localize(`card.socQuality.${quality.status}`)}</p>
        <p>${this.localize('card.socQuality.sourceTime')}: ${captured}</p>
        ${this.config.soc_quality.capacity_kwh !== undefined
          ? html`<p>${this.localize('card.socQuality.energyToTarget')}${quality.target !== null ? ` (${quality.target} %)` : ''}: ${energy}</p>
              <p>${this.localize('card.socQuality.estimateNote')}</p>`
          : nothing}
      </div>
    `;
  }

  private _renderServiceControl(): TemplateResult | void {
    const hass = this._hass;
    const serviceControl = this.config.services;

    const activeServices = Object.entries(serviceControl).reduce((acc, [key, value]) => {
      if (value) {
        acc[key] = {
          name: servicesCtrl(this.userLang)[key].name,
          icon: servicesCtrl(this.userLang)[key].icon,
        };
      }
      return acc;
    }, {} as Record<string, { name: string; icon: string }>);

    return html`
      <div class="default-card remote-tab">
        <canyonero-remote-control .hass=${hass} .card=${this as any} .selectedServices=${activeServices}></canyonero-remote-control>
      </div>
    `;
  }

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  /* --------------------------- ADDITIONAL METHODS --------------------------- */

  public _isDarkTheme(): boolean {
    const css = getComputedStyle(this);
    const primaryTextColor = css.getPropertyValue('--primary-text-color');
    const isDark = isDarkColor(primaryTextColor);
    return isDark;
  }

  /* -------------------------------------------------------------------------- */
  /* ADDED CARD FUNCTIONALITY                                                   */
  /* -------------------------------------------------------------------------- */

  toggleCard = (action: HEADER_ACTION) => {
    forwardHaptic('light');
    const cardElement = this.shadowRoot?.querySelector('.card-element') as HTMLElement;
    if (!this._currentCardType || !cardElement) return;
    const baseCardTypes = Object.values(this.buttonCards).filter((card) => card.button_type !== 'action');

    if (action === 'next' || action === 'prev') {
      const currentIndex = baseCardTypes.findIndex((card) => card.key === this._currentCardType);
      const newIndex =
        action === 'next'
          ? (currentIndex + 1) % baseCardTypes.length
          : (currentIndex - 1 + baseCardTypes.length) % baseCardTypes.length;

      cardElement.style.animation = 'none';
      setTimeout(() => {
        this._currentCardType = baseCardTypes[newIndex].key;
        cardElement.style.animation = 'fadeIn 0.3s ease';
      }, 300);
      // this.activeCardType = cardTypes[newIndex].type;
    } else if (action === 'close') {
      this._currentCardType = null;
    }
  };

  public toggleCardFromButtons = (cardType: string) => {
    forwardHaptic('light');
    setTimeout(() => {
      this._currentCardType = this._currentCardType === cardType ? null : cardType;
    }, 150);
  };

  /* --------------------- SUBCARDS METHODS AND RENDERING --------------------- */

  private _renderOverviewDataWithSubCard(): TemplateResult {
    const overViewData = this.createDataArray(this.DataKeys.vehicleOverview);

    // VAG: doors_locked / doors_open / windows_open each expand into a
    // per-position sub-card using extra_state_attributes.detail.
    const subCardMapping = {
      doorsLocked: {
        key: 'lock',
        renderSubCard: () => this._renderSubCard('lock'),
      },
      doorsOpen: {
        key: 'door',
        renderSubCard: () => this._renderSubCard('door'),
      },
      windowsOpen: {
        key: 'window',
        renderSubCard: () => this._renderSubCard('window'),
      },
    };

    const toggleMoreInfo = (key: string) => {
      const entityId = this.vehicleEntities[key]?.entity_id;
      if (entityId) this.toggleMoreInfo(entityId);
    };

    const subCardVisible = (key: string) => this.isSubCardActive(key);

    const toggleSubCard = (key: string) => {
      if (['doorsLocked', 'doorsOpen', 'windowsOpen'].includes(key)) {
        this.toggleSubCard(subCardMapping[key].key);
      } else {
        toggleMoreInfo(key);
      }
    };

    return html`
      ${overViewData.map(({ key, name, icon, state, active }) => {
        if (state) {
          const subCard = subCardMapping[key];
          return html`
            <div class="data-row">
              <div>
                <ha-icon
                  class="data-icon"
                  .icon="${icon}"
                  ?warning=${!active}
                  @click=${() => toggleMoreInfo(key)}
                ></ha-icon>
                <span class="data-label">${name}</span>
              </div>
              <div class="data-value-unit" @click=${() => toggleSubCard(key)}>
                <span ?warning=${!active} style="text-transform: capitalize;">${state}</span>
                ${subCard
                  ? html`
                      <ha-icon class="subcard-icon" ?active=${subCardVisible(subCard.key)} icon="mdi:chevron-down">
                      </ha-icon>
                    `
                  : ''}
              </div>
            </div>
            ${subCard ? subCard.renderSubCard() : ''}
          `;
        } else {
          return html``;
        }
      })}
    `;
  }

  private _renderSubCard(attributeType: 'lock' | 'window' | 'door'): TemplateResult {
    const lang = this.userLang;
    const state: Record<string, string | boolean> = {};
    const entityID = this.getEntityTypeId(attributeType);
    const stateMapping = this.getAttrStateMap(attributeType, lang);
    const attributesVisible = this.isSubCardActive(attributeType);

    // Iterate over the keys of the stateMapping object
    Object.keys(stateMapping).forEach((key) => {
      let attributeState: string | boolean | null | undefined;
      // Check if the attribute is the charge flap DC status
      if (key === 'chargeflapdcstatus' && this.vehicleEntities.chargeFlapDCStatus?.entity_id !== undefined) {
        attributeState = this.getEntityState(this.vehicleEntities.chargeFlapDCStatus.entity_id);
      } else if (key === 'sunroofstatus' && this.vehicleEntities.sunroofStatus?.entity_id !== undefined) {
        attributeState = this.getEntityState(this.vehicleEntities.sunroofStatus.entity_id);
      } else {
        attributeState = this.getEntityAttribute(entityID, key);
      }
      // Check if the attribute state

      if (attributeState !== undefined && attributeState !== null) {
        state[key] = attributeState;
      }
    });
    // Render the attributes
    return html`
      <div class="sub-attributes" ?active=${attributesVisible}>
        ${Object.keys(state).map((key) => {
          const rawState = state[key];
          // Check if the state is valid and the attribute mapping exists
          if (rawState !== undefined && rawState !== null && stateMapping[key]) {
            const readableState = stateMapping[key].state[rawState] || 'Unknown';
            let classState: boolean;
            if (key === 'sunroofstatus') {
              classState = rawState === '0' ? false : true;
            } else {
              classState = ['2', '1', false].includes(rawState as string) ? false : true;
            }
            return html`
              <div class="data-row">
                <span>${stateMapping[key].name}</span>
                <div class="data-value-unit" ?warning=${classState}>
                  <span style="text-transform: capitalize">${readableState}</span>
                </div>
              </div>
            `;
          }
          // Return nothing if the attribute state is not valid or attribute mapping does not exist
          return '';
        })}
      </div>
    `;
  }

  private getEntityTypeId(attributeType: 'lock' | 'window' | 'door'): string | undefined {
    // VAG: each aggregate binary sensor owns the per-position detail in
    // extra_state_attributes.detail.* — sub-card reads from that entity.
    const entityMapping: Record<string, string | undefined> = {
      lock: this.vehicleEntities.doorsLocked?.entity_id,
      window: this.vehicleEntities.windowsOpen?.entity_id,
      door: this.vehicleEntities.doorsOpen?.entity_id,
    };
    return entityMapping[attributeType];
  }

  private getAttrStateMap(
    attributeType: 'lock' | 'window' | 'door',
    lang: string
  ): Record<'lock' | 'window' | 'door', string> {
    const stateMapping: Record<string, any> = {
      lock: StateMapping.lockAttributes(lang),
      window: StateMapping.windowAttributes(lang),
      door: StateMapping.doorAttributes(lang),
    };
    return stateMapping[attributeType] || {};
  }

  /* -------------------------------------------------------------------------- */
  /* GET ENTITIES STATE AND ATTRIBUTES                                          */
  /* -------------------------------------------------------------------------- */

  private createItemDataRow(title: string, data: EntityConfig[], key: string): TemplateResult {
    const isActive = (key: string) => this.isSubCardActive(key);

    const subCardToggleBtn = (key: string) => {
      if (key !== '') {
        return html`
          <div class="subcard-icon" ?active=${isActive(key)} @click=${() => this.toggleSubCard(key)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </div>
        `;
      }
      return html``;
    };

    return html`
      <div class="default-card">
        <div class="data-header">
          <div @click=${() => this.toggleSubCard(key)} ?clickable=${key !== ''}>${title}</div>
          ${subCardToggleBtn(key)}
        </div>
        <div class="data-box" active=${isActive(key)}>
          ${data.map(({ key, name, icon, state }) => {
            if (state) {
              return html`
                <div class="data-row">
                  <div>
                    <ha-icon class="data-icon" .icon="${icon}"></ha-icon>
                    <span class="data-label">${name}</span>
                  </div>
                  <div
                    class="data-value-unit"
                    @click=${() => this.toggleMoreInfo(this.vehicleEntities[key]?.entity_id)}
                  >
                    <span>${state}</span>
                  </div>
                </div>
              `;
            } else {
              return html``;
            }
          })}
        </div>
      </div>
    `;
  }

  private toggleSubCard(key: string): void {
    if (key === undefined) return;
    const subCard = this._activeSubCard;
    if (key === 'warnings' && this.isOverviewDataActive()) {
      subCard.forEach((key) => subCard.delete(key));
      this.updateComplete.then(() => {
        subCard.add(key);
        this.requestUpdate();
      });
    } else {
      subCard.has(key) ? subCard.delete(key) : subCard.add(key);
      this.requestUpdate();
    }
  }

  private isSubCardActive = (key: string): boolean => {
    return key === '' ? true : this._activeSubCard.has(key);
  };

  private isOverviewDataActive(): boolean {
    return ['lock', 'window', 'door'].some((k) => this._activeSubCard.has(k));
  }

  private createDataArray(keys: EntityConfig[]): EntityConfig[] {
    return keys.map((config) => this.getEntityInfoByKey(config));
  }

  private getEntityInfoByKey = ({ key, name, icon, state, unit }: EntityConfig): EntityConfig => {
    const vehicleEntityKey = this.vehicleEntities[key];

    if (!vehicleEntityKey) {
      return { key, name, icon, state, unit, active: false };
    }

    const defaultInfo = this.getDefaultEntityInfo({ key, name, icon, state, unit }, vehicleEntityKey);

    // Per-key enrichers — currently only SoC (icon picks battery-low/medium/high
    // based on the percentage) and doorsLocked (lock/lock-open icon based on
    // binary state). Everything else falls through to default + warning logic.
    if (key === 'soc' || key === 'targetSoc') {
      return this.getSocIconInfo(defaultInfo, vehicleEntityKey);
    }
    if (key === 'doorsLocked') {
      return this.getLockIconInfo(defaultInfo, vehicleEntityKey);
    }
    return this.getWarningOrDefaultInfo(defaultInfo, key, vehicleEntityKey);
  };

  /* --------------------------- ENTITY INFO BY KEYS -------------------------- */

  private getDefaultEntityInfo = (
    { key, name, icon, state, unit }: EntityConfig,
    vehicleEntity: VehicleEntity
  ): EntityConfig => {
    return {
      key,
      name: name ?? vehicleEntity.original_name,
      icon: icon ?? this.getEntityAttribute(vehicleEntity.entity_id, 'icon'),
      state: state ?? this.getStateDisplay(vehicleEntity.entity_id),
      unit: unit ?? this.getEntityAttribute(vehicleEntity.entity_id, 'unit_of_measurement'),
    };
  };

  /** Pick a battery-{low,medium,high} icon for SoC / target-SoC. */
  private getSocIconInfo = (defaultInfo: EntityConfig, vehicleEntity: VehicleEntity): EntityConfig => {
    const currentState = this.getEntityState(vehicleEntity.entity_id);
    const stateValue = currentState ? parseFloat(currentState) : 0;
    let socIcon: string;
    if (stateValue < 35) socIcon = 'mdi:battery-charging-low';
    else if (stateValue < 70) socIcon = 'mdi:battery-charging-medium';
    else socIcon = 'mdi:battery-charging-high';
    return { ...defaultInfo, icon: socIcon };
  };

  /** Swap the lock-open / lock-closed mdi icon based on the binary state. */
  private getLockIconInfo = (defaultInfo: EntityConfig, vehicleEntity: VehicleEntity): EntityConfig => {
    const isUnlocked = this.getBooleanState(vehicleEntity.entity_id); // on = unlocked
    return {
      ...defaultInfo,
      icon: isUnlocked ? 'mdi:lock-open' : 'mdi:lock',
      active: !isUnlocked,
    };
  };

  private getWarningOrDefaultInfo = (
    defaultInfo: EntityConfig,
    key: string,
    vehicleEntity: VehicleEntity
  ): EntityConfig => {
    if (this.DataKeys.vehicleWarnings.map((key) => key.key).includes(key)) {
      const warningState = this.getBooleanState(vehicleEntity.entity_id);

      return {
        ...defaultInfo,
        state: warningState ? 'Problem' : 'OK',
        active: warningState ? true : false,
      };
    }
    return defaultInfo;
  };

  /* --------------------- GET ENTITY STATE AND ATTRIBUTES -------------------- */

  public getStateDisplay(entityId: string | undefined): string {
    if (!entityId || !this._hass.states[entityId]) return '';
    return this._hass.formatEntityState(this._hass.states[entityId]);
  }

  public getSecondaryInfo(cardType: string): string {
    const { odometer, doorsLocked, soc, serviceDueInDays, chargingState } = this.vehicleEntities;
    const lang = this.userLang;

    switch (cardType) {
      case 'tripCards':
        // Odometer (km) — same intent as Mercedes original
        return this.getStateDisplay(odometer?.entity_id);

      case 'vehicleCards': {
        // VAG: binary_sensor.<vin>_doors_locked  (on = unlocked, off = locked)
        const state = this.getEntityState(doorsLocked?.entity_id);
        if (!state) return '';
        const m = StateMapping.lockStates(lang) as Record<string, string>;
        return m[state] || this.localize('card.common.stateUnknown');
      }

      case 'ecoCards': {
        // Service & Diagnostics — show service-due-in-days when present
        const days = this.getEntityState(serviceDueInDays?.entity_id);
        if (!days) return '';
        const n = parseInt(days, 10);
        return Number.isFinite(n) ? `${n} ${this.localize('card.ecoCard.daysUnit') || 'd'}` : days;
      }

      case 'tyreCards': {
        // Battery & Charging — show SoC + charging-state (was Mercedes
        // tyre-pressure min/max which produced `Infinity - -Infinity`
        // when the DataKeys.tyrePressures array is empty on VAG).
        const socStr = soc?.entity_id ? this.getStateDisplay(soc.entity_id) : '';
        const chargeStateRaw = chargingState?.entity_id
          ? this.getEntityState(chargingState.entity_id)
          : '';
        const m = StateMapping.chargingState(lang).state as Record<string, string>;
        const chargeLabel = chargeStateRaw && m[chargeStateRaw] ? m[chargeStateRaw] : '';
        if (socStr && chargeLabel) return `${socStr} · ${chargeLabel}`;
        return socStr || chargeLabel || '';
      }

      default:
        return '';
    }
  }

  private getBooleanState(entity: string | undefined): boolean {
    if (!entity || !this._hass.states[entity]) return false;
    return this._hass.states[entity].state === 'on';
  }

  private getEntityState(entity: string | undefined): string {
    if (!entity || !this._hass.states[entity]) return '';
    return this._hass.states[entity].state;
  }

  private getEntityAttribute(entity: string | undefined, attribute: string) {
    if (!entity || !this._hass.states[entity] || !this._hass.states[entity].attributes) return undefined;
    return this._hass.states[entity].attributes[attribute];
  }

  public getFormattedAttributeState(entity: string | undefined, attribute: string): string {
    if (!entity || !this._hass.states[entity] || !this._hass.states[entity].attributes) return '';
    return this._hass.formatEntityAttributeValue(this._hass.states[entity], attribute);
  }

  private toggleMoreInfo(entity: string): void {
    fireEvent(this, 'hass-more-info', { entityId: entity });
  }

  public getErrorNotify(cardType: string): boolean {
    if (!this.DataKeys.vehicleWarnings) return false;
    const { vehicleEntities } = this;
    switch (cardType) {
      case 'vehicleCards':
        const warnKeys = [
          ...this.DataKeys.vehicleWarnings.map((key) => key.key).filter((key) => key !== 'tirePressureWarning'),
        ];
        const hasWarning = warnKeys.some((key) => this.getBooleanState(vehicleEntities[key]?.entity_id));
        return hasWarning;
      case 'tyreCards':
        return this.getBooleanState(vehicleEntities.tirePressureWarning?.entity_id);
      default:
        return false;
    }
  }

  /* ---------------------------- THEME METHODS ---------------------------- */
  private applyTheme(theme: string): void {
    const themeData = this._hass.themes.themes[theme];
    if (themeData) {
      // Filter out only top-level properties for CSS variables and the modes property
      const filteredThemeData = Object.keys(themeData)
        .filter((key) => key !== 'modes')
        .reduce((obj, key) => {
          obj[key] = themeData[key];
          return obj;
        }, {} as Record<string, string>);

      // Get the current mode (light or dark)
      const mode = this.isDark ? 'dark' : 'light';
      const modeData = themeData.modes && typeof themeData.modes === 'object' ? themeData.modes[mode] : {};

      // Merge the top-level and mode-specific variables
      const allThemeData = { ...filteredThemeData, ...modeData };
      applyThemesOnElement(
        this,
        { default_theme: this._hass.themes.default_theme, themes: { [theme]: allThemeData } },
        theme,
        false
      );
    }
  }

  /* ---------------------------- COMPUTE CARD STYLES & CLASSES ---------------------------- */
  private _computeCardStyles() {
    // if (!this._resizeInitiated) return;
    const backgroundUrl = this.isDark ? IMAGE.BACK_WHITE : IMAGE.BACK_DARK;
    return styleMap({
      '--vic-background-image': this.config.show_background ? `url(${backgroundUrl})` : 'none',
    });
  }

  private _computeClasses() {
    // if (this._loading) return;
    const showBackground = this.config.show_background && !this._loading;
    const sectionOrder = this.config.extra_configs?.section_order ?? [...SECTION_DEFAULT_ORDER];
    const lastItem = sectionOrder[sectionOrder.length - 1];
    const firstItem = sectionOrder[0];
    const mapSingle = sectionOrder.includes(SECTION.MINI_MAP) && sectionOrder.length === 1;
    return classMap({
      __background: showBackground,
      __map_last: lastItem === SECTION.MINI_MAP && firstItem !== SECTION.MINI_MAP,
      __map_first: firstItem === SECTION.MINI_MAP && lastItem !== SECTION.MINI_MAP,
      __map_single: mapSingle,
    });
  }

  /* --------------------------- CONFIGURATION METHODS -------------------------- */
  private _setUpButtonAnimation = (): void => {
    if (this.isEditorPreview || this.vehicleButtons === null) return;
    setTimeout(() => {
      const gridItems = this.vehicleButtons.shadowRoot?.querySelectorAll('.grid-item');
      if (!gridItems) return;
      gridItems.forEach((item) => {
        item.classList.add('zoom-in');
        item.addEventListener('animationend', () => {
          item.classList.remove('zoom-in');
        });
      });
    }, 50);
  };

  /* ----------------------------- EVENTS HANDLERS ---------------------------- */

  private handleEditorEvents(e: Event): void {
    e.stopPropagation();
    if (!this.isEditorPreview) return;

    const actionType = (e as CustomEvent).detail;
    console.log('actionType', actionType);
    switch (true) {
      case actionType.startsWith('btn_'):
        const btnType = actionType.replace('btn_', '');
        this.vehicleButtons?.showCustomBtnEditor(btnType);
        break;

      case actionType.startsWith('toggle_preview_'):
        console.log('toggle_preview_', actionType);
        const preview = actionType.replace('toggle_preview_', '');
        this._currentPreviewType = preview;
        this.updateComplete.then(() => {
          this._configurePreview(preview);
        });
        break;
      case actionType.startsWith('swipe_'):
        const swipeAction = actionType.replace('swipe_', '');
        this.vehicleButtons?.swipeToButton(swipeAction);
        break;
      default:
        break;
    }
  }

  /* ---------------------------- GRID LAYOUT METHODS --------------------------- */
  private getGridRowSize(): number {
    const { show_slides = true, show_map = true, show_buttons = true, show_header_info = true } = this.config;

    // Header Name
    const configName = this.config.name?.trim() === '';
    const name = configName ? ROWPX / 44 : 0;

    // Mini map height
    const mini_map_height = this.config.extra_configs?.mini_map_height ?? 150;
    const minimapHeight = mini_map_height / ROWPX;

    // Grid buttons height
    const visibleButtons = Object.values(this.buttonCards).filter((card) => !card.button.hidden).length;
    const rows_size = this.config.button_grid?.rows_size ?? 2;
    const columns_size = this.config.button_grid?.columns_size ?? 2;

    const possibleRows = Math.ceil(visibleButtons / columns_size);
    const buttonRows = rows_size > possibleRows ? possibleRows : rows_size;

    const layoutRowHeight = this.config.button_grid?.button_layout === 'vertical' ? 57 * 2 : 57;
    const gridButtonsHeight = (buttonRows * layoutRowHeight + 12) / ROWPX;

    // Images height
    const configImgMaxHeight = this.config.extra_configs?.images_swipe?.max_height ?? 150;
    const imagesHeight = (configImgMaxHeight + 28) / ROWPX;

    const headerInfoHeight = 70 / ROWPX;

    // Mini map in section last or first
    const sectionsList = this.config.extra_configs?.section_order ?? [...SECTION_DEFAULT_ORDER];
    const miniMapAtTopOrBottom =
      sectionsList[sectionsList.length - 1] === SECTION.MINI_MAP || sectionsList[0] === SECTION.MINI_MAP
        ? 12 / ROWPX
        : 0;

    let gridRowSize = 0; // 58px
    if (show_slides) gridRowSize += imagesHeight;
    if (show_map) gridRowSize += minimapHeight;
    if (show_buttons) gridRowSize += gridButtonsHeight;
    if (show_header_info) gridRowSize += headerInfoHeight;
    if (configName) gridRowSize += name;
    gridRowSize -= miniMapAtTopOrBottom;

    return gridRowSize;
  }

  public getCardSize() {
    // console.log('mansory', this.getGridRowSize());
    return 3;
  }

  public getLayoutOptions() {
    const gridRowSize = this.getGridRowSize();
    return {
      grid_min_rows: gridRowSize,
      grid_columns: 4,
      grid_min_columns: 4,
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'canyonero-vehicle-dashboard': Canyonero;
  }
  interface Window {
    Canyonero: Canyonero;
  }
}
