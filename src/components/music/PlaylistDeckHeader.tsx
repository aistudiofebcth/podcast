import * as React from 'react'
import { cn } from '@/lib/cn'
import { Pencil, Play } from '@/components/icons'
import CircularIconButton from '@/components/primitives/CircularIconButton'

/**
 * Props for {@link PlaylistDeckHeader} — a header overlaid on the active
 * playlist card.
 */
export interface PlaylistDeckHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Center label (e.g. the playlist name). */
  label: string
  /** Fired when the edit button is tapped. */
  onEdit?: () => void
  /** Fired when the play button is tapped. */
  onPlay?: () => void
}

/**
 * Header row overlaid on the active playlist card.
 *
 * Balances an outlined edit control on the left, a centered playlist label, and
 * a filled play control on the right.
 */
export function PlaylistDeckHeader({
  label,
  onEdit,
  onPlay,
  className,
  ...rest
}: PlaylistDeckHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between w-full', className)} {...rest}>
      <CircularIconButton
        variant="outlined"
        size={49}
        icon={<Pencil />}
        ariaLabel="Edit"
        onClick={onEdit}
      />
      <span className="type-body-medium text-white">{label}</span>
      <CircularIconButton
        variant="primary-filled"
        size={49}
        icon={<Play />}
        ariaLabel="Play"
        onClick={onPlay}
      />
    </div>
  )
}

export default PlaylistDeckHeader
