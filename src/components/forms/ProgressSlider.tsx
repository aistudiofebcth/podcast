import * as React from 'react'
import { cn } from '@/lib/cn'

/**
 * Props for {@link ProgressSlider} — a playback progress bar with optional seeking.
 */
export interface ProgressSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSeek'> {
  /** Current playback position. */
  value: number
  /** Track length (total duration). */
  max: number
  /** Fired with the seeked-to value when the track is tapped. Omit for a read-only bar. */
  onSeek?: (v: number) => void
  /** Left-aligned elapsed-time label (e.g. `1:12`). */
  elapsedLabel?: string
  /** Right-aligned total-time label (e.g. `3:48`). */
  totalLabel?: string
  /** Dim and block interaction. */
  disabled?: boolean
}

/**
 * Playback progress bar.
 *
 * A thin rounded track with a `primary` fill and a white thumb, exposing
 * `role="slider"` with `aria-valuenow/min/max`. When `onSeek` is provided,
 * tapping the track computes the fraction from the pointer position and seeks.
 * Optional elapsed / total time labels sit below.
 */
export const ProgressSlider = React.forwardRef<HTMLDivElement, ProgressSliderProps>(
  function ProgressSlider(
    { value, max, onSeek, elapsedLabel, totalLabel, disabled = false, className, ...rest },
    ref,
  ) {
    const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0
    const showLabels = elapsedLabel !== undefined || totalLabel !== undefined

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!onSeek || disabled) return
      const rect = e.currentTarget.getBoundingClientRect()
      const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
      onSeek(fraction * max)
    }

    return (
      <div ref={ref} className={cn('flex flex-col', disabled && 'opacity-50', className)} {...rest}>
        <div
          role="slider"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-disabled={disabled || undefined}
          onClick={handleClick}
          className={cn(
            'relative h-1.5 w-full rounded-full bg-white-400',
            onSeek && !disabled ? 'cursor-pointer' : 'pointer-events-none',
          )}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary"
            style={{ width: `${pct}%` }}
          />
          <div
            className="absolute size-3.5 -translate-x-1/2 -translate-y-1/4 rounded-full bg-white-900"
            style={{ left: `${pct}%` }}
          />
        </div>

        {showLabels && (
          <div className="tabular mt-2 flex justify-between type-micro text-white-500">
            <span>{elapsedLabel}</span>
            <span>{totalLabel}</span>
          </div>
        )}
      </div>
    )
  },
)

export default ProgressSlider
