import * as React from 'react'
import { cn } from '@/lib/cn'
import { Pencil, Play } from '@/components/icons'
import CircularIconButton from '@/components/primitives/CircularIconButton'

/**
 * Props for {@link CollectionPanel} — a titled collection surface with an
 * action cluster and an embedded content region.
 */
export interface CollectionPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Collection title shown in the header. */
  title: string
  /** Fired when the edit button is tapped. */
  onEdit?: () => void
  /** Fired when the play button is tapped. */
  onPlay?: () => void
  /** Collection content (e.g. an embedded carousel), rendered below the header. */
  children: React.ReactNode
}

/**
 * Titled collection surface.
 *
 * A rounded solid-surface panel with a title, a right-aligned edit/play action
 * cluster, and a content region beneath for an embedded carousel or grid.
 */
export function CollectionPanel({
  title,
  onEdit,
  onPlay,
  children,
  className,
  ...rest
}: CollectionPanelProps) {
  return (
    <div
      className={cn('relative rounded-[24px] bg-surface p-6 overflow-hidden', className)}
      {...rest}
    >
      <div className="flex items-start justify-between">
        <h3 className="type-heading-3 text-content max-w-[60%]">{title}</h3>
        <div className="flex gap-2">
          <CircularIconButton
            variant="outlined"
            icon={<Pencil />}
            ariaLabel="Edit"
            onClick={onEdit}
          />
          <CircularIconButton
            variant="primary-filled"
            icon={<Play />}
            ariaLabel="Play"
            onClick={onPlay}
          />
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  )
}

export default CollectionPanel
