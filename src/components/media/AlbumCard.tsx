import * as React from 'react'
import { cn } from '@/lib/cn'
import Chip from '@/components/forms/Chip'

/** A single genre tag rendered in the card's bottom row. */
export interface AlbumCardTag {
  label: string
  /** `accent` = brand fill; `neutral` = translucent glass (default). */
  tone?: 'accent' | 'neutral'
}

export interface AlbumCardProps {
  /** Full-bleed cover artwork URL. */
  cover: string
  /** Album/show title overlaid at the top. */
  title: string
  /** Optional secondary line, e.g. "75 ep.". */
  episodeCount?: string
  /** Genre tags rendered along the bottom. */
  tags?: AlbumCardTag[]
  /**
   * Overlay layout. `left` (default) = title top-left, tags bottom-left;
   * `right` = title top-right, tags bottom-center — the two kit variants.
   */
  align?: 'left' | 'right'
  /** Fires when the whole card is tapped; makes the card a button. */
  onPress?: () => void
  /** Optional node pinned to the top edge (e.g. a floating deck header). */
  deckHeader?: React.ReactNode
  className?: string
}

const SHADOW = { textShadow: '0 1px 10px rgba(0,0,0,0.55)' } as const

/**
 * Full-bleed cover card for the discover/library decks.
 *
 * The artwork fills the card; the title sits in a top corner and the genre tags
 * along the bottom, both lifted off the image with a soft text shadow (matching
 * the Figma, which relies on the photo rather than a gradient scrim). `align`
 * switches between the two kit layouts.
 */
export function AlbumCard({
  cover,
  title,
  episodeCount,
  tags,
  align = 'left',
  onPress,
  deckHeader,
  className,
}: AlbumCardProps) {
  const Root = onPress ? 'button' : 'div'
  const right = align === 'right'

  return (
    <Root
      {...(onPress ? { type: 'button', onClick: onPress } : {})}
      className={cn(
        'relative block overflow-hidden rounded-[24px] w-[288px] h-[240px]',
        'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className,
      )}
    >
      <img src={cover} alt="" className="absolute inset-0 size-full object-cover" />
      {/* faint corner shade so text stays legible on any cover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25" />

      {deckHeader && <div className="absolute inset-x-0 top-0 z-10">{deckHeader}</div>}

      {/* title */}
      <div
        className={cn(
          'absolute top-4 flex flex-col',
          right ? 'right-5 items-end text-right' : 'left-5 items-start text-left',
        )}
        style={SHADOW}
      >
        <span className="text-[22px] font-bold leading-tight text-white">{title}</span>
        {episodeCount && (
          <span className="mt-0.5 text-[13px] font-medium text-white/85">{episodeCount}</span>
        )}
      </div>

      {/* tags */}
      {tags && tags.length > 0 && (
        <div
          className={cn(
            'absolute bottom-4 flex gap-2',
            right ? 'inset-x-0 justify-center' : 'left-5 justify-start',
          )}
        >
          {tags.map((tag, i) => (
            <Chip key={i} variant="tag" tone={tag.tone ?? 'neutral'} label={tag.label} />
          ))}
        </div>
      )}
    </Root>
  )
}

export default AlbumCard
