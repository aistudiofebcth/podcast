import * as React from 'react'
import { cn } from '@/lib/cn'

export interface StatTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading glyph, cloned to 15px. */
  icon: React.ReactNode
  /** Stat text (e.g. play count, duration). Rendered with tabular numerals. */
  label: string
}

/**
 * Compact icon + stat label pairing.
 *
 * Baseline-aligns a 15px glyph against a tabular label — used for playcounts,
 * durations, and follower stats on media cards.
 */
export const StatTile = React.forwardRef<HTMLSpanElement, StatTileProps>(function StatTile(
  { icon, label, className, ...rest },
  ref,
) {
  const glyph = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 15 })
    : icon

  return (
    <span
      ref={ref}
      className={cn('inline-flex items-end gap-[5px] text-white-500', className)}
      {...rest}
    >
      {glyph}
      <span className="type-label tabular">{label}</span>
    </span>
  )
})

export default StatTile
