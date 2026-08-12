import * as React from 'react'
import { cn } from '@/lib/cn'

export interface CardCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cards to lay out. */
  children: React.ReactNode
  /** Space between cards, in pixels. */
  gap?: number
  /** `horizontal` = scrolling row; `grid` = fixed-column grid. */
  layout?: 'horizontal' | 'grid'
  /** Number of columns when `layout` is `grid`. */
  columns?: number
}

/**
 * Layout container for a group of media cards.
 *
 * In `horizontal` mode the children scroll on the x-axis with hidden
 * scrollbars; in `grid` mode they wrap into a fixed number of equal columns.
 * Spacing is driven by the `gap` prop (px).
 */
export function CardCarousel({
  children,
  gap = 16,
  layout = 'horizontal',
  columns = 3,
  className,
  style,
  ...rest
}: CardCarouselProps) {
  const isGrid = layout === 'grid'

  return (
    <div
      className={cn(isGrid ? 'grid' : 'flex overflow-x-auto no-scrollbar', className)}
      style={{
        gap,
        ...(isGrid
          ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default CardCarousel
