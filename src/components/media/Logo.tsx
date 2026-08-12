import * as React from 'react'
import { cn } from '@/lib/cn'

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `full` (default) = mark + "FEBC / CHRISTIAN MEDIA" lockup; `mark` = mark only. */
  variant?: 'full' | 'mark'
  /** Pixel size of the square mark; the wordmark scales from it. Defaults to 44. */
  width?: number
  /** Hint that the logo sits over imagery (kept for API symmetry; no style change). */
  onImage?: boolean
}

/**
 * FEBC Christian Media brand lockup.
 *
 * The mark is a broadcast-wave emblem — an open ring with three radiating
 * ripples — whose colours adapt to the theme (deep teal on light, sky blue on
 * dark) via the `--logo-ring` / `--logo-ripple` tokens. The full lockup pairs
 * it with the "FEBC" wordmark over a letter-spaced "CHRISTIAN MEDIA" line.
 */
export const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(function Logo(
  { variant = 'full', width = 44, onImage: _onImage, className, ...rest },
  ref,
) {
  const mark = (
    <svg
      width={width}
      height={width}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      focusable={false}
      style={{ flexShrink: 0 }}
    >
      {/* radiating ripples (upper-left) */}
      <path d="M19 7 A17 17 0 0 0 7 19" stroke="var(--logo-ripple)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M20 12.5 A11.5 11.5 0 0 0 12.5 20" stroke="var(--logo-ripple)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M21 18 A6 6 0 0 0 18 21" stroke="var(--logo-ripple)" strokeWidth="2.6" strokeLinecap="round" />
      {/* bold open ring */}
      <path d="M15 11 A17 17 0 1 1 11.5 33.5" stroke="var(--logo-ring)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )

  return (
    <span
      ref={ref}
      className={cn('inline-flex items-center', className)}
      style={{ gap: width * 0.28 }}
      aria-label="FEBC Christian Media"
      {...rest}
    >
      {mark}
      {variant === 'full' && (
        <span className="flex flex-col justify-center leading-none" aria-hidden>
          <span
            className="font-extrabold text-content"
            style={{ fontSize: Math.round(width * 0.64), letterSpacing: -0.5, lineHeight: 0.92 }}
          >
            FEBC
          </span>
          <span
            className="font-semibold"
            style={{
              fontSize: Math.round(width * 0.2),
              letterSpacing: width * 0.09,
              color: 'var(--logo-ring)',
              marginTop: width * 0.06,
            }}
          >
            CHRISTIAN MEDIA
          </span>
        </span>
      )}
    </span>
  )
})

export default Logo
