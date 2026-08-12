import * as React from 'react'
import { cn } from '@/lib/cn'
import AlbumThumbnail from '@/components/media/AlbumThumbnail'
import PlayPauseButton from '@/components/primitives/PlayPauseButton'

/** Props for {@link MiniPlayer}. */
export interface MiniPlayerProps {
  /** The now-playing track summary. */
  track: { title: string; artist: string; cover: string }
  /** Whether playback is currently active. */
  playing: boolean
  /** Fired when the trailing play/pause button is pressed. */
  onPlayPause: () => void
  /** Fired when the thumbnail/title area is pressed to expand the full player. */
  onExpand: () => void
  className?: string
}

/**
 * Compact now-playing bar.
 *
 * A frosted-glass strip pinned above the tab bar: tapping the artwork/title
 * expands the full player, while the trailing {@link PlayPauseButton} toggles
 * playback in place.
 */
export const MiniPlayer = React.forwardRef<HTMLDivElement, MiniPlayerProps>(function MiniPlayer(
  { track, playing, onPlayPause, onExpand, className },
  ref,
) {
  return (
    <div ref={ref} className={cn('flex items-center gap-3 rounded-[20px] glass p-2 pr-4', className)}>
      <button
        type="button"
        onClick={onExpand}
        className="flex min-w-0 flex-1 items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <AlbumThumbnail src={track.cover} size={48} />
        <div className="min-w-0 flex-1">
          <p className="type-body-bold truncate text-sm text-white">{track.title}</p>
          <p className="type-caption truncate text-content-muted">{track.artist}</p>
        </div>
      </button>
      <PlayPauseButton playing={playing} size={36} onClick={onPlayPause} />
    </div>
  )
})

export default MiniPlayer
