<div align="center">

<img src="assets/canyonero-logo.png" alt="Canyonero" width="320">

# Canyonero Vehicle Dashboard
### The ultimate Home Assistant Lovelace dashboard for your road-going beast

[![GitHub Release](https://img.shields.io/github/v/release/its-me-prash/vag-connect-cards?style=for-the-badge&color=orange)](https://github.com/its-me-prash/vag-connect-cards/releases)
[![HACS Badge](https://img.shields.io/badge/HACS-Custom-blue?style=for-the-badge)](https://github.com/hacs/integration)
[![Home Assistant](https://img.shields.io/badge/Home__Assistant-Dashboard-darkblue?style=for-the-badge&logo=home-assistant)](https://www.home-assistant.io)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

*"Can you name the truck with four-wheel drive, smells like a steak and seats thirty-five? Canyonero!"*

---

**[Features](#-features)** · **[Installation](#-installation)** · **[Configuration](#-configuration)** · **[Easter Eggs](#-easter-eggs)** · **[Roadmap](#-roadmap)**

</div>

---

## ✨ Features

A single Lovelace card that turns any HA-connected vehicle into a beautiful dashboard.

- **Brand-aware header** — wordmark, model, VIN suffix, online indicator
- **Auto-discovery** — point `entity:` at one sensor of your car, the card resolves the device, all entities, render images, and `device_tracker` from the registry
- **Image slider** — picks up `image.<vehicle>_render_*` entities automatically (5 best renders, sorted by quality)
- **Mini-map + popup** — leaflet-based, GPS from `device_tracker.<vehicle>_position`, optional address resolution via OpenStreetMap or Google Geocoding
- **4 slide-cards**:
  - 🛣️ **Trip & Range** — odometer, electric / combustion / total range, fuel, SoC, last-trip stats
  - 🚘 **Vehicle Status** — doors / windows / plug / lights / warnings with per-position sub-cards
  - 🔧 **Service & Diagnostics** — service-due days, oil service, 12 V voltage, OTA, software version, API quota
  - 🔋 **Battery & Charging** — animated SoC donut with charging pulse, charging power / rate / type / ETA
- **Action buttons** — Lock · Unlock · Climate · Charging · Honk-Flash · Wake · Refresh — wired directly to your integration's services
- **Read-only mode aware** — buttons disable themselves when your integration runs in `read_only_mode`
- **HA theme native** — fonts and colours inherit from your theme, no hard-coded brand styling
- **i18n** — German · English · French

---

## 🔌 Supported Integrations

| Integration | Status | Notes |
|---|---|---|
| [VAG Connect](https://github.com/its-me-prash/vag-connect-ha) (VW · Audi · Škoda · SEAT · CUPRA · Porsche · VW US/CA) | ✅ Native | Best-supported integration |
| Mercedes-Benz `mbapi2020` | 🟡 Works | Pick any `sensor.*` of your car; renames the action buttons match Mercedes services |
| Tesla, BMW Connected Drive, etc. | 🟡 Generic | Works as long as the integration exposes `sensor.<car>_*` entities and a `device_tracker` |

Multi-brand support gets first-class treatment in `v0.0.3` via the `integration:` config key.

---

## 📦 Installation

### HACS (recommended)

1. Open **HACS** → **Frontend** → ⋮ → **Custom repositories**
2. Add `https://github.com/its-me-prash/vag-connect-cards` · category **Dashboard**
3. Install **Canyonero**
4. Hard-refresh the HA tab (`Ctrl+Shift+R`)

### Manual

1. Grab `canyonero-vehicle-dashboard.js` from the [latest release](https://github.com/its-me-prash/vag-connect-cards/releases/latest)
2. Drop it into `/config/www/canyonero-vehicle-dashboard.js`
3. **Settings → Dashboards → ⋮ → Resources → Add resource**:
   - URL: `/local/canyonero-vehicle-dashboard.js`
   - Type: **JavaScript Module**

---

## ⚙️ Configuration

### Minimum

```yaml
type: custom:canyonero-vehicle-dashboard
entity: sensor.<your_car>_battery_soc
```

That's it — every other entity (doors, windows, charging, images, GPS) is auto-discovered from the same device.

### Full example

```yaml
type: custom:canyonero-vehicle-dashboard
entity: sensor.audi_a4_b9_battery_soc
device_tracker: device_tracker.audi_a4_b9_position
model_name: Audi A4 B9 Avant
brand_logo_url: /local/my-audi-logo.svg    # optional custom logo
show_slides: true
show_buttons: true
show_map: true
show_header_info: true
enable_services_control: true
images:
  - url: https://example.com/audi-a4-front.jpg
    title: Front
map_popup_config:
  hours_to_show: 24
  default_zoom: 13
  theme_mode: auto
services:
  doorsLock: true
  charge: true
  preheat: true
selected_language: en
```

All of these are also reachable via the **visual editor** in the Lovelace card picker.

---

## 🎨 Branding

The card ships with **text wordmarks** for known brands (AUDI · VW · ŠKODA · SEAT · CUPRA · PORSCHE · VW US · VAG). No manufacturer logos are bundled out-of-the-box — trademark / licensing reasons.

Want your own logo? Drop it into `/config/www/` and reference it:

```yaml
brand_logo_url: /local/logos/audi-rings.svg
```

The slot accepts any image format the browser can render. Theme it via standard HA card styling.

---

## 🌍 Languages

- 🇩🇪 German (`de`)
- 🇬🇧 English (`en`)
- 🇫🇷 French (`fr`)

Auto-detected via `selected_language: system` (default) or pinned via `selected_language: de`.

---

## 🥚 Easter Eggs

A handful of subtle nods to the favourite-shows trifecta this card is named after — Simpsons (the Canyonero!), How I Met Your Mother, Big Bang Theory.

**Browser console** (F12 → Console tab):

```js
canyonero.about()       // info banner
canyonero.bazinga()     // BBT
canyonero.legendary()   // HIMYM — "Legen… wait for it… DARY!"
canyonero.canyonero()   // The full Hank Williams Jr. jingle
canyonero.dOh()         // self-explanatory
```

**Triple-click the brand header** → a rotating quote toast (10 quotes, randomised, auto-dismisses).

Every release also prints one rotating quote in the console banner. Get all five.

---

## 🛣️ Roadmap

| Version | Theme |
|---|---|
| **v0.0.2** ✅ | Canyonero rebrand + easter eggs |
| **v0.0.3** | Multi-integration via `integration:` config key; dead-code cleanup; expanded brand wordmarks (Tesla, BMW, Mercedes, Toyota, Volvo, Ford, Hyundai, Kia) |
| **v0.1.0** | Setup wizard in the editor — device dropdown + section tickboxes — so non-technical users skip YAML entirely |
| **v0.2.0** | Custom theme presets per brand (Audi anthracite, VW marine, Porsche racing green …) |

Suggestions / bugs → [open an issue](https://github.com/its-me-prash/vag-connect-cards/issues).

---

## 📜 Why "Canyonero"?

[The fictional SUV](https://simpsons.fandom.com/wiki/Canyonero) advertised in *The Simpsons* S9E15. *Twelve yards long, two lanes wide, sixty-five tons of American pride!* The name nods at three favourite shows whose quotes are sprinkled across the codebase as easter eggs. Suit up.

---

## 📄 License

Optional EU Data Act SOC quality and battery-energy estimate:
[configuration and limits](docs/soc-quality.md).

[MIT](LICENSE).

Original card architecture is derived from an MIT-licensed Lovelace predecessor; this project is a separate evolution focused on multi-brand vehicle integration support. License attribution is preserved in [`LICENSE`](LICENSE).
