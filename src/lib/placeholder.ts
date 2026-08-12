/**
 * Deterministic placeholder artwork as inline SVG data URIs, so demo screens
 * and the showcase render with no network dependency. Swap these for real
 * cover URLs in production.
 */
export function cover(hue: number): string {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='480' height='480'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='hsl(${hue},72%,52%)'/>` +
    `<stop offset='1' stop-color='hsl(${(hue + 45) % 360},68%,22%)'/>` +
    `</linearGradient></defs>` +
    `<rect width='480' height='480' fill='url(#g)'/>` +
    `<circle cx='360' cy='140' r='120' fill='hsl(${(hue + 20) % 360},80%,60%)' opacity='0.35'/>` +
    `</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const covers = {
  stay: cover(14),
  midnight: cover(255),
  goldenHour: cover(38),
  bloom: cover(320),
  neon: cover(190),
  ember: cover(6),
} as const
