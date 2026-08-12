import * as React from 'react'
import { cn } from '@/lib/cn'
import { Verified } from '@/components/icons'

export interface ArtistRowProps {
  /** Square artwork / avatar image URL. */
  cover: string
  /** Primary name (artist, playlist, or track). */
  name: string
  /** Secondary line beneath the name. */
  subtitle?: string
  /** Show the accent verified badge after the name. */
  verified?: boolean
  /** Trailing content — e.g. a "Following" pill, or favourite + more actions. */
  trailing?: React.ReactNode
  /** When set, the whole row becomes a button. */
  onPress?: () => void
  className?: string
}

/**
 * Frosted result row for an artist or track.
 *
 * A translucent glass card with a rounded thumbnail, a name (optionally with an
 * accent verified badge), a subtitle, and a trailing slot — used for search
 * results and the "Following" list on the ZenTune Components page.
 */
export const ArtistRow = React.forwardRef<HTMLDivElement, ArtistRowProps>(function ArtistRow(
  { cover, name, subtitle, verified = false, trailing, onPress, className },
  ref,
) {
  const interactive = Boolean(onPress)
  return (
    <div
      ref={ref}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onPress}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onPress?.()
              }
            }
          : undefined
      }
      className={cn(
        'flex items-center gap-3 rounded-[20px] glass p-2.5 pr-4',
        interactive && 'cursor-pointer transition-colors hover:bg-white-250',
        className,
      )}
    >
      <img src={cover} alt="" className="size-12 shrink-0 rounded-[14px] object-cover" />
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="truncate type-body-bold text-white">{name}</span>
          {verified && <Verified size={16} className="shrink-0 text-accent" />}
        </span>
        {subtitle && <span className="block truncate type-caption text-content-muted">{subtitle}</span>}
      </span>
      {trailing && <span className="ml-auto shrink-0">{trailing}</span>}
    </div>
  )
})

export default ArtistRow
