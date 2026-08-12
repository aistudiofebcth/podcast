import * as React from 'react'
import { cn } from '@/lib/cn'
import { Star, StarFilled } from '@/components/icons'

/**
 * Props for {@link RatingStars} — a controlled 5-star rating input.
 */
export interface RatingStarsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current rating (number of filled stars). */
  value: number
  /** Total number of stars to render. Defaults to 5. */
  max?: number
  /** Fired with the new rating (1..max) when a star is tapped. */
  onChange: (v: number) => void
  /** Star glyph size in px. Defaults to 32. */
  size?: number
  /** Render the rating without allowing changes. */
  readOnly?: boolean
  /** Dim and block all interaction. */
  disabled?: boolean
}

/**
 * Interactive five-star rating.
 *
 * A `radiogroup` of gold (`warning`) star buttons. Stars below `value` render
 * filled; the rest render outlined. Tapping a star sets the rating to its
 * 1-based index. `readOnly` and `disabled` both suppress interaction (the
 * latter also dims the control).
 */
export const RatingStars = React.forwardRef<HTMLDivElement, RatingStarsProps>(function RatingStars(
  { value, max = 5, onChange, size = 32, readOnly = false, disabled = false, className, ...rest },
  ref,
) {
  const locked = readOnly || disabled

  return (
    <div
      ref={ref}
      role="radiogroup"
      className={cn('inline-flex items-center gap-[10px]', disabled && 'opacity-50', className)}
      {...rest}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i < value
        const Glyph = filled ? StarFilled : Star
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === i + 1}
            aria-label={`${i + 1} star`}
            disabled={locked}
            onClick={() => onChange(i + 1)}
            className={cn(
              'text-warning transition-colors duration-150 ease-zen',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              'disabled:pointer-events-none',
            )}
          >
            <Glyph size={size} />
          </button>
        )
      })}
    </div>
  )
})

export default RatingStars
