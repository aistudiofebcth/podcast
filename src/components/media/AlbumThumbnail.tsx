import * as React from 'react'
import { cn } from '@/lib/cn'
import { Play, Pause } from '@/components/icons'

export interface AlbumThumbnailProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Artwork image URL. */
  src: string
  /** Alt text for the artwork image. */
  alt?: string
  /** Centered playback overlay glyph. Defaults to `none`. */
  overlay?: 'play' | 'pause' | 'none'
  /** Square pixel size of the tile. Defaults to 80. */
  size?: number
  /** When provided, the whole tile becomes a button. */
  onPress?: () => void
}

/**
 * Square album artwork with an optional centered play/pause overlay.
 *
 * The overlay is a frosted `glass` circle (~40% of the tile) carrying a filled
 * Play or Pause glyph. Pass `onPress` to make the entire tile a tap target.
 */
export const AlbumThumbnail = React.forwardRef<HTMLDivElement, AlbumThumbnailProps>(
  function AlbumThumbnail(
    { src, alt = '', overlay = 'none', size = 80, onPress, className, ...rest },
    ref,
  ) {
    const overlaySize = Math.round(size * 0.4)
    const glyphSize = Math.round(size * 0.28)

    return (
      <div
        ref={ref}
        style={{ width: size, height: size }}
        className={cn(
          'relative shrink-0 overflow-hidden rounded-[20px] ring-[0.5px] ring-white-350',
          className,
        )}
        {...rest}
      >
        <img src={src} alt={alt} className="size-full object-cover" />

        {overlay !== 'none' && (
          <span
            aria-hidden
            style={{ width: overlaySize, height: overlaySize }}
            className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full glass text-white"
          >
            {overlay === 'play' ? <Play size={glyphSize} /> : <Pause size={glyphSize} />}
          </span>
        )}

        {onPress && (
          <button
            type="button"
            onClick={onPress}
            aria-label={overlay === 'pause' ? 'Pause' : 'Play'}
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        )}
      </div>
    )
  },
)

export default AlbumThumbnail
