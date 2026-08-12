import * as React from 'react'
import { cn } from '@/lib/cn'

/** A single circular destination inside {@link BottomNavBar}. */
export interface BottomNavItemProps {
  /** The glyph to render (an icon from `@/components/icons`). Cloned to 28px. */
  icon: React.ReactNode
  /** Highlights this item as the current destination. */
  active?: boolean
  /** Required for accessibility — icon-only controls have no text. */
  ariaLabel: string
  /** Fired when the item is tapped. */
  onPress?: () => void
}

/**
 * A circular icon target used inside the floating bottom-nav pill.
 *
 * Active items invert to a solid white fill with ink glyph; inactive items sit
 * on a translucent dark disc. Always pass `ariaLabel` — there is no text.
 */
export const BottomNavItem = React.forwardRef<HTMLButtonElement, BottomNavItemProps>(
  function BottomNavItem({ icon, active = false, ariaLabel, onPress }, ref) {
    const glyph = React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 28 })
      : icon

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        aria-current={active ? 'page' : undefined}
        onClick={onPress}
        className={cn(
          'grid place-items-center rounded-full size-[58px] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          active ? 'bg-white-900 text-ink' : 'bg-dark-250 text-white backdrop-blur-xl',
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
  /** `key` of the currently active destination. */
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
 * Renders a translucent glass bar that hovers above content near the bottom of
 * the screen, mapping each `item` to a {@link BottomNavItem}. The item whose
 * `key` equals `activeKey` is highlighted.
 */
export function BottomNavBar({
  items,
  activeKey,
  onSelect,
  theme = 'dark',
  className,
}: BottomNavBarProps) {
  return (
    <nav
      data-theme={theme}
      className={cn(
        'mx-auto flex items-center justify-around gap-1 rounded-full border border-white-200 p-1.5 h-[74px] w-[286px] glass',
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
