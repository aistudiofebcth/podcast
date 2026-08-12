import * as React from 'react'
import { cn } from '@/lib/cn'

/** A single circular destination inside {@link BottomNavBar}. */
export interface BottomNavItemProps {
  /** The glyph to render (an icon from `@/components/icons`). Cloned to 30px. */
  icon: React.ReactNode
  /** Highlights this item as the current destination. */
  active?: boolean
  /** Required for accessibility — icon-only controls have no text. */
  ariaLabel: string
  /** Fired when the item is tapped. */
  onPress?: () => void
}

/**
 * A circular icon target inside the floating bottom-nav pill.
 *
 * Active items invert to a solid white disc with an ink glyph; inactive items
 * sit on a translucent dark disc with a white glyph. Always pass `ariaLabel`.
 */
export const BottomNavItem = React.forwardRef<HTMLButtonElement, BottomNavItemProps>(
  function BottomNavItem({ icon, active = false, ariaLabel, onPress }, ref) {
    const glyph = React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 30 })
      : icon

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        aria-current={active ? 'page' : undefined}
        onClick={onPress}
        className={cn(
          'grid size-16 place-items-center rounded-full transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          active ? 'bg-white-900 text-ink' : 'bg-dark-500 text-white',
        )}
      >
        {glyph}
      </button>
    )
  },
)

/** One destination in the {@link BottomNavBar} `items` list. */
export interface BottomNavBarItem {
  /** Stable identifier, matched against `activeKey`. */
  key: string
  /** The glyph to render (an icon from `@/components/icons`). */
  icon: React.ReactNode
  /** Accessible label; falls back to `key` when omitted. */
  ariaLabel?: string
}

/** Props for the floating frosted-glass bottom navigation pill. */
export interface BottomNavBarProps {
  /** Destinations rendered left-to-right. */
  items: BottomNavBarItem[]
  /** `key` of the active destination. Pass a non-matching value for the all-inactive state. */
  activeKey: string
  /** Fired with the selected item's `key`. */
  onSelect: (key: string) => void
  /** Surface treatment — `dark` (default) or overlaid `onImage`. */
  theme?: 'dark' | 'onImage'
  className?: string
}

/**
 * Floating frosted pill navigation with circular destination items.
 *
 * A translucent gradient-glass capsule that hugs its circular items. The item
 * whose `key` equals `activeKey` is highlighted; passing an `activeKey` that
 * matches nothing renders the all-inactive state.
 */
export function BottomNavBar({ items, activeKey, onSelect, className }: BottomNavBarProps) {
  return (
    <nav
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full p-1.5',
        'border border-white-200 bg-gradient-to-b from-white-250 to-white-150 backdrop-blur-xl',
        className,
      )}
    >
      {items.map((item) => (
        <BottomNavItem
          key={item.key}
          active={item.key === activeKey}
          ariaLabel={item.ariaLabel ?? item.key}
          onPress={() => onSelect(item.key)}
          icon={item.icon}
        />
      ))}
    </nav>
  )
}

export default BottomNavBar
