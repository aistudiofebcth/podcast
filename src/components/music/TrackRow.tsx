import * as React from 'react'
import { cn } from '@/lib/cn'
import AlbumThumbnail from '@/components/media/AlbumThumbnail'
import IconButton from '@/components/primitives/IconButton'
import { Heart, HeartFilled, MoreHorizontal } from '@/components/icons'

/** Props for {@link TrackRow}. */
export interface TrackRowProps {
  /** Album/track artwork URL rendered in the leading thumbnail. */
  cover: string
  /** Track title. */
  title: string
  /** Artist / performer name. */
  artist: string
  /** Whether this track is currently playing (shows pause overlay + active fill). */
  playing?: boolean
  /** Whether the track is favourited (fills the heart in brand teal). */
  favourited?: boolean
  /** Fired when the thumbnail play/pause overlay is pressed. */
  onPlayPause?: () => void
  /** Fired when the favourite button is pressed. */
  onFavourite?: () => void
  /** Fired when the more (…) button is pressed. */
  onMore?: () => void
  className?: string
}

/**
 * Frosted song row.
 *
 * A translucent, fully-rounded list item pairing an {@link AlbumThumbnail}
 * (with an inline play/pause overlay) with the track title/artist and trailing
 * favourite + overflow controls. The row lifts to an active fill while playing.
 */
export const TrackRow = React.forwardRef<HTMLDivElement, TrackRowProps>(function TrackRow(
  { cover, title, artist, playing = false, favourited = false, onPlayPause, onFavourite, onMore, className },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-3 rounded-[25px] border-2 border-white-250 p-3.5 glass-soft',
        playing && 'bg-white-200',
        className,
      )}
    >
      <AlbumThumbnail src={cover} size={80} overlay={playing ? 'pause' : 'play'} onPress={onPlayPause} />
      <div className="min-w-0 flex-1">
        <p className="type-body-bold truncate text-white">{title}</p>
        <p className="type-caption mt-1 truncate text-content-muted">{artist}</p>
      </div>
      <div className="flex items-center gap-3">
        <IconButton
          icon={favourited ? <HeartFilled className="text-primary" /> : <Heart />}
          ariaLabel="Favourite"
          size={24}
          onClick={onFavourite}
        />
        <IconButton icon={<MoreHorizontal />} ariaLabel="More" size={24} onClick={onMore} />
      </div>
    </div>
  )
})

export default TrackRow
