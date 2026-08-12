import * as React from 'react'
import { cn } from '@/lib/cn'

export interface IconBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Decorative glyph to render centered inside the badge. */
  icon: React.ReactNode
  /** `circle` (default) => fully round; `rounded-square` => 12px radius. */
  shape?: 'circle' | 'rounded-square'
  /** Square pixel size of the badge. Defaults to 40. */
  size?: number
}

/**
 * Small translucent glass badge holding a decorative icon.
 *
 * Used as an ornamental accent (e.g. genre/mood markers) atop media surfaces.
 * The icon is cloned to roughly 60% of the badge size so glyphs stay optically
 * centered regardless of `size`.
 */
export const IconBadge = React.forwardRef<HTMLSpanElement, IconBadgeProps>(function IconBadge(
  { icon, shape = 'circle', size = 40, className, ...rest },
  ref,
) {
  const glyph = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
        size: Math.round(size * 0.6),
      })
    : icon

  return (
    <span
      ref={ref}
      aria-hidden
      style={{ width: size, height: size }}
      className={cn(
        'grid shrink-0 place-items-center bg-white-200 text-white backdrop-blur-md',
        shape === 'circle' ? 'rounded-full' : 'rounded-[12px]',
        className,
      )}
      {...rest}
    >
      {glyph}
    </span>
  )
})

export default IconBadge
