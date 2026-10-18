/** Optional EU Data Act per-field quality display. No polling or commands. */
export interface SocQualityConfig {
  max_age_minutes: number;
  capacity_kwh?: number;
  target_soc?: number;
}

interface SocState {
  state: string;
  attributes: Record<string, unknown>;
}

export type SocQualityStatus = 'missing' | 'ambiguous' | 'unverified' | 'future' | 'stale' | 'fresh';

export function validSocQualityConfig(config: SocQualityConfig): boolean {
  return (
    Number.isFinite(config.max_age_minutes) && config.max_age_minutes > 0 &&
    (config.capacity_kwh === undefined || (Number.isFinite(config.capacity_kwh) && config.capacity_kwh > 0)) &&
    (config.target_soc === undefined || (Number.isFinite(config.target_soc) && config.target_soc >= 0 && config.target_soc <= 100))
  );
}

function percent(raw: unknown): number | null {
  if (typeof raw !== 'string' && typeof raw !== 'number') return null;
  if (typeof raw === 'string' && !raw.trim()) return null;
  const number = Number(raw);
  return Number.isFinite(number) && number >= 0 && number <= 100 ? number : null;
}

export function socQuality(
  entity: SocState | undefined,
  config: SocQualityConfig,
  targetState?: string,
  now = Date.now()
): { status: SocQualityStatus; captured?: string; ageMinutes: number | null; missingKwh: number | null; target: number | null } {
  const soc = percent(entity?.state);
  const attributes = entity?.attributes ?? {};
  const captured = typeof attributes.data_captured_at === 'string' ? attributes.data_captured_at : undefined;
  // A timezone-less timestamp must not depend on browser locale.
  const timestamp = captured && /(?:Z|[+-]\d{2}:\d{2})$/i.test(captured) ? Date.parse(captured) : NaN;
  const ageMinutes = Number.isFinite(timestamp) ? (now - timestamp) / 60000 : null;
  const target = config.target_soc === undefined ? percent(targetState) : percent(config.target_soc);
  let status: SocQualityStatus;
  if (soc === null) status = 'missing';
  else if (attributes.ambiguous_reading === true) status = 'ambiguous';
  else if (!validSocQualityConfig(config) || attributes.freshness_source !== 'point' || ageMinutes === null) status = 'unverified';
  else if (ageMinutes < 0) status = 'future';
  else status = ageMinutes <= config.max_age_minutes ? 'fresh' : 'stale';
  const estimate = status === 'fresh' && target !== null && config.capacity_kwh !== undefined
    ? Math.max(0, target - soc!) * config.capacity_kwh / 100 : null;
  return { status, captured, ageMinutes, missingKwh: estimate !== null && Number.isFinite(estimate) ? estimate : null, target };
}
