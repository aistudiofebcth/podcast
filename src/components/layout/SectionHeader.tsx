import * as React from 'react'
import { cn } from '@/lib/cn'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title rendered as the primary heading. */
  title: string
  /** Heading scale: `2` = large (type-heading-2), `3` = default (type-heading-3). */
  level?: 2 | 3
  /** Optional small uppercase-style kicker rendered above the title. */
  overline?: string
  /** Optional supporting copy rendered below the title row. */
  subtitle?: string
  /** Optional text action (e.g. "See all") rendered on the right of the title row. */
  action?: { label: string; onPress: () => void }
  /** Custom right-side node. Takes precedence over `action` when provided. */
  trailing?: React.ReactNode
}

/**
 * Titled section header for feed/list groupings.
 *
 * Renders an optional overline, a title paired with a right-aligned action or
 * custom trailing node, and an optional subtitle. Used to introduce carousels
 * and lists throughout ZenTune.
 */
export function SectionHeader({
  title,
  level = 3,
  overline,
  subtitle,
  action,
  trailing,
  className,
  ...rest
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col', className)} {...rest}>
      {overline && <span className="type-caption text-content-muted mb-1">{overline}</span>}
      <div className="flex items-end justify-between">
        <h2 className={cn(level === 2 ? 'type-heading-2' : 'type-heading-3', 'text-content')}>
          {title}
        </h2>
        {trailing ??
          (action && (
            <button
              type="button"
              onClick={action.onPress}
              className="type-body-medium text-content-muted"
            >
              {action.label}
            </button>
          ))}
      </div>
      {subtitle && <p className="type-body text-content-muted mt-1">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
