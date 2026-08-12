import * as React from 'react'
import { cn } from '@/lib/cn'
import SelectionBadge from '@/components/media/SelectionBadge'

export interface ArtistCardProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  /** Artist cover artwork URL. */
  cover: string
  /** Artist name shown top-right. */
  title: string
  /** Optional secondary label (e.g. genre) under the title. */
  subtitle?: string
  /** Whether this tile is currently selected. */
  selected?: boolean
  /** Fires when the tile is tapped. */
  onToggle?: () => void
}

/**
 * Selectable artist tile used in the onboarding/selection grid.
 *
 * A compact cover thumbnail with the artist name overlaid top-right and a
 * {@link SelectionBadge} that fades in when `selected`. Toggling is driven by
 * `onToggle`.
 */
export const ArtistCard = React.forwardRef<HTMLButtonElement, ArtistCardProps>(function ArtistCard(
  { cover, title, subtitle, selected = false, onToggle, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={cn(
        'relative overflow-hidden rounded-[12px] w-[106px] h-[99px]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className,
      )}
      {...rest}
    >
      <img src={cover} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-dark-900/20" />

      <div className="absolute top-1.5 right-2 text-right text-white">
        <p className="text-[9px] font-bold">{title}</p>
        {subtitle && <p className="text-[7px] opacity-80">{subtitle}</p>}
      </div>

      <SelectionBadge visible={!!selected} className="absolute bottom-2 right-2" />
    </button>
  )
})

export default ArtistCard
