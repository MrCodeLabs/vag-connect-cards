# Optional per-field SOC quality and energy estimate

This display is intended for VW Group Connect **EU Data Act** SOC values
which publish `data_captured_at`, `freshness_source` and, when applicable,
`ambiguous_reading`. Other integration channels may use different quality
contracts. Missing attributes do not prove that their data is stale.
The feature is opt-in; cards without `soc_quality` keep their existing UI.

```yaml
type: custom:canyonero-vehicle-dashboard
entity: sensor.example_vehicle_battery_soc
soc_quality:
  max_age_minutes: 25
  capacity_kwh: 58
  target_soc: 80
```

`max_age_minutes` is required when this feature is enabled: choose a finite,
positive value appropriate to your source. There is no universal freshness
limit. `capacity_kwh` is optional, finite and positive. `target_soc` is
optional (0–100); when omitted, the card uses the discovered vehicle target
SOC entity. If no valid target is available, no energy estimate is displayed.
The example values are illustrative, not vehicle defaults.

The panel distinguishes missing/invalid, ambiguous, unverified, future,
stale and recent per-point SOC values. It requires a finite SOC from 0 to
100, `freshness_source: point` and an ISO timestamp with an explicit timezone.
It never substitutes `last_changed`, HA polling time or dataset delivery
time for a measurement timestamp. The original last-reported SOC display is
retained and is not a claim that the source is current.

With a valid recent point, target and usable battery capacity, the panel
shows `max(0, target - SOC) * capacity / 100` kWh. This is battery energy,
excluding losses; it does not predict completion at a deadline or assume
future charging power. No charging command or new data request is sent.
The panel re-evaluates on HA state updates; it adds no polling timer.
Dates use HA's configured timezone and the card's selected language.

This contribution does not replace your charging controller or add a fixed
home dashboard link. A deadline/EVSE-session panel is a separate concern;
use existing custom subcards for additional HA entities.

A [standard vertical-stack example](charging-dashboard-example.yaml) keeps
vehicle data in Canyonero and EVSE power/session/deadline status in native
HA entities. Those measurements may come from different integrations and
must be selected explicitly. No integration driver changes are needed.
