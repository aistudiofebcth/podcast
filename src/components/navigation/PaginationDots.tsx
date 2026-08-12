import * as React from 'react'
import { cn } from '@/lib/cn'

export interface PaginationDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total number of dots. */
  count: number
  /** Index of the currently active dot. */
  activeIndex: number
  /** Called with the dot index when a dot is pressed. */
  onDotPress?: (i: number) => void
}

/**
 * Carousel / onboarding page indicator.
 *
 * Renders `count` dots as a tablist; the active dot stretches into a pill in
 * the brand `primary` colour while the rest stay short and translucent.
 */
export const PaginationDots = React.forwardRef<HTMLDivElement, PaginationDotsProps>(
  function PaginationDots({ count, activeIndex, onDotPress, className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="tablist"
        className={cn('flex items-center gap-2', className)}
        {...rest}
      >
        {Array.from({ length: count }, (_, i) => {
          const active = i === activeIndex
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => onDotPress?.(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-150 ease-zen',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                active ? 'w-4 bg-primary' : 'w-2 bg-white-250',
              )}
            />
          )
        })}
      </div>
    )
  },
)

export default PaginationDots
