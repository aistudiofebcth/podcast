import * as React from 'react'
import { cn } from '@/lib/cn'
import Chip from '@/components/forms/Chip'

/** A single genre tag rendered in the card's bottom row. */
export interface AlbumCardTag {
  label: string
  /** `accent` = brand teal fill; `neutral` = translucent white (default). */
  tone?: 'accent' | 'neutral'
}

export interface AlbumCardProps {
  /** Full-bleed cover artwork URL. */
  cover: string
  /** Album/show title overlaid at the top. */
  title: string
  /** Optional secondary line, e.g. "12 Episodes". */
  episodeCount?: string
  /** Genre tags rendered as a wrapping row along the bottom. */
  tags?: AlbumCardTag[]
  /** Fires when the whole card is tapped; makes the card a button. */
  onPress?: () => void
  /** Optional node pinned to the top edge (e.g. a floating action). */
  deckHeader?: React.ReactNode
  className?: string
}

/**
 * Full-bleed carousel card for the discover/library decks.
 *
 * Renders cover art with a bottom-up scrim, an overlaid title + episode count,
 * and a wrapping row of genre {@link Chip} tags. When `onPress` is supplied the
 * entire card becomes a button.
 */
export function AlbumCard({
  cover,
  title,
  episodeCount,
  tags,
  onPress,
  deckHeader,
  className,
}: AlbumCardProps) {
  const Root = onPress ? 'button' : 'div'

  return (
    <Root
      {...(onPress ? { type: 'button', onClick: onPress } : {})}
      className={cn(
        'relative overflow-hidden rounded-[20px] w-[261px] h-[243px]',
        'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className,
      )}
    >
      <img src={cover} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/30" />

      {deckHeader && <div className="absolute inset-x-0 top-0 z-10">{deckHeader}</div>}

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <p className="type-heading-3 text-white">{title}</p>
          {episodeCount && <p className="type-body text-white-600 mt-1">{episodeCount}</p>}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-[7px]">
            {tags.map((tag, i) => (
              <Chip key={i} variant="tag" tone={tag.tone ?? 'neutral'} label={tag.label} />
            ))}
          </div>
        )}
      </div>
    </Root>
  )
}

export default AlbumCard
