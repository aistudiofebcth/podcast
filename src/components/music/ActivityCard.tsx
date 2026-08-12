import * as React from 'react'
import { ChevronRight } from '@/components/icons'

/**
 * Props for {@link ActivityCard} — an accent call-to-action row.
 */
export interface ActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Row label. */
  label: string
  /** Leading glyph, rendered inside the tile (cloned to 24px). */
  icon: React.ReactNode
  /** Fired when the row is pressed. */
  onPress?: () => void
}

/**
 * Accent CTA row.
 *
 * A full-width brand-teal button with a rounded leading icon tile, a bold
 * label, and a trailing chevron — used to promote a featured activity or
 * destination.
 */
export function ActivityCard({ label, icon, onPress, className, ...rest }: ActivityCardProps) {
  const glyph = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 24 })
    : icon

  return (
    <div className={className} {...rest}>
      <button
        type="button"
        onClick={onPress}
        className="w-full flex items-center gap-3 rounded-[16px] bg-primary p-4 text-left"
      >
        <span className="grid place-items-center size-10 rounded-[12px] bg-white-200 text-white">
          {glyph}
        </span>
        <span className="type-body-bold text-white flex-1">{label}</span>
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  )
}

export default ActivityCard
