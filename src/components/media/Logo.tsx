import * as React from 'react'
import { cn } from '@/lib/cn'

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `full` (default) = waveform mark + "zentune" wordmark; `mark` = mark only. */
  variant?: 'full' | 'mark'
  /** Optional pixel width for the mark; the wordmark scales with its font size. */
  width?: number
  /** Hint that the logo sits over imagery (kept for API symmetry; no style change). */
  onImage?: boolean
}

/**
 * ZenTune brand lockup.
 *
 * The mark is an inline equalizer of five rounded vertical bars in
 * `text-logo-mark`. The full lockup pairs it with the wordmark — "zen" in the
 * muted wordmark color and "tune" in the accent mark color.
 */
export const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(function Logo(
  { variant = 'full', width, onImage: _onImage, className, ...rest },
  ref,
) {
  const mark = (
    <svg
      width={width ?? 32}
      height={width ?? 32}
      viewBox="0 0 32 32"
      fill="currentColor"
      className="text-logo-mark"
      aria-hidden
      focusable={false}
    >
      <rect x="2" y="12" width="4" height="8" rx="2" />
      <rect x="8.5" y="7" width="4" height="18" rx="2" />
      <rect x="15" y="3" width="4" height="26" rx="2" />
      <rect x="21.5" y="9" width="4" height="14" rx="2" />
      <rect x="28" y="13" width="4" height="6" rx="2" />
    </svg>
  )

  return (
    <span
      ref={ref}
      className={cn('inline-flex items-center gap-2', className)}
      aria-label="ZenTune"
      {...rest}
    >
      {mark}
      {variant === 'full' && (
        <span className="font-bold text-[28px] tracking-tight" aria-hidden>
          <span className="text-logo-wordmark">zen</span>
          <span className="text-logo-mark">tune</span>
        </span>
      )}
    </span>
  )
})

export default Logo
