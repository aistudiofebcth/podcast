import * as React from 'react'
import { cn } from '@/lib/cn'
import { ChevronRight } from '@/components/icons'

export type ListRowLeadingType = 'icon' | 'avatar' | 'square' | 'thumbnail'
export type ListRowSize = 'row' | 'tall'

/** Props for a reusable settings / menu row. */
export interface ListRowProps {
  /** Primary label text. */
  label: string
  /** Optional secondary line beneath the label. */
  caption?: string
  /** Optional leading visual (icon, avatar image, or thumbnail). */
  leading?: React.ReactNode
  /** How to size and clip the leading slot. Defaults to `icon`. */
  leadingType?: ListRowLeadingType
  /** Optional trailing content; falls back to a chevron when omitted. */
  trailing?: React.ReactNode
  /** Fired when the row is tapped. When set, the row renders as a button. */
  onPress?: () => void
  /** `row` (56px) or `tall` (101px). Defaults to `row`. */
  size?: ListRowSize
  className?: string
}

const LEADING: Record<ListRowLeadingType, string> = {
  icon: 'grid size-6 place-items-center text-icon',
  avatar: 'size-16 rounded-full overflow-hidden',
  square: 'size-14 rounded-[16px] overflow-visible',
  thumbnail: 'size-20 rounded-[16px] overflow-hidden',
}

/**
 * Reusable settings / menu row.
 *
 * A full-width tappable row on a soft translucent surface: a sized leading slot
 * (icon, circular avatar, or rounded thumbnail), a label with optional caption,
 * and a trailing slot that defaults to a chevron when nothing is provided.
 */
export function ListRow({
  label,
  caption,
  leading,
  leadingType = 'icon',
  trailing,
  onPress,
  size = 'row',
  className,
}: ListRowProps) {
  const Root = onPress ? 'button' : 'div'

  return (
    <Root
      {...(onPress ? { type: 'button' as const, onClick: onPress } : {})}
      className={cn(
        'w-full flex items-center gap-3.5 rounded-[20px] bg-white-200 px-4 text-left',
        'transition-colors duration-150 ease-zen',
        onPress &&
          'active:bg-white-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        size === 'tall' ? 'h-[90px]' : 'h-16',
        className,
      )}
    >
      {leading != null && <span className={cn('shrink-0', LEADING[leadingType])}>{leading}</span>}

      <span className="flex-1 min-w-0">
        <span className="block text-[17px] font-bold text-content">{label}</span>
        {caption && <span className="mt-0.5 block text-[14px] text-content-muted">{caption}</span>}
      </span>

      {trailing ?? <ChevronRight size={24} className="text-content-muted ml-auto" />}
    </Root>
  )
}

export default ListRow
