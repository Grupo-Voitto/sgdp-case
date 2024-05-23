export function clampNumber(minValue: number, value: number, maxValue: number) {
  return Math.max(minValue, Math.min(value, maxValue));
}
