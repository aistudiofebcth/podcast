import * as React from 'react'
import { cn } from '@/lib/cn'
import { Check } from '@/components/icons'

export interface SelectionBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** When false the badge renders nothing. */
  visible: boolean
  /** Square pixel size of the badge. Defaults to 14. */
  size?: number
}

/**
 * Circular check badge marking a selected card.
 *
 * Renders `null` when `visible` is false so it can be dropped into a card
 * corner unconditionally. The check glyph is cloned to ~70% of the badge size.
 */
export const SelectionBadge = React.forwardRef<HTMLSpanElement, SelectionBadgeProps>(
  function SelectionBadge({ visible, size = 14, className, ...rest }, ref) {
    if (!visible) return null

    return (
      <span
        ref={ref}
        aria-hidden
        style={{ width: size, height: size }}
        className={cn(
          'grid shrink-0 place-items-center rounded-full border-[0.5px] border-white-900 bg-primary text-white',
          className,
        )}
        {...rest}
      >
        <Check size={Math.round(size * 0.7)} />
      </span>
    )
  },
)

export default SelectionBadge
