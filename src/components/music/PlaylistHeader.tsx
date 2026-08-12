import * as React from 'react'
import { cn } from '@/lib/cn'
import StatTile from '@/components/media/StatTile'
import FAB from '@/components/primitives/FAB'
import Divider from '@/components/primitives/Divider'
import { Play } from '@/components/icons'

/** Props for {@link PlaylistHeader}. */
export interface PlaylistHeaderProps {
  /** Small eyebrow label above the title (e.g. "Playlist"). */
  overline?: string
  /** Playlist title, rendered as the hero heading. */
  title: string
  /** Meta stats (track count, duration, …) rendered as {@link StatTile}s. */
  stats?: { icon: React.ReactNode; label: string }[]
  /** Fired when the floating Play-all button is pressed. */
  onPlay?: () => void
  className?: string
}

/**
 * Hero header for a playlist.
 *
 * Stacks an optional overline, an oversized title, and a row of stat tiles,
 * with a floating primary Play button anchored to the top-right and a hairline
 * divider closing the block.
 */
export function PlaylistHeader({ overline, title, stats, onPlay, className }: PlaylistHeaderProps) {
  return (
    <div className={cn('relative flex flex-col', className)}>
      {overline && <p className="type-body-bold text-white">{overline}</p>}
      <h1 className="mt-1 text-[38px] font-bold leading-none text-white">{title}</h1>
      {stats && stats.length > 0 && (
        <div className="mt-3 flex items-center gap-10">
          {stats.map((s, i) => (
            <StatTile key={i} icon={s.icon} label={s.label} />
          ))}
        </div>
      )}
      <FAB
        variant="primary"
        icon={<Play />}
        ariaLabel="Play all"
        className="absolute right-0 top-0"
        onClick={onPlay}
      />
      <Divider className="mt-5" tone="light" />
    </div>
  )
}

export default PlaylistHeader
