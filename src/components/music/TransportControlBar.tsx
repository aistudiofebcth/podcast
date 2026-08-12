import * as React from 'react'
import { cn } from '@/lib/cn'
import { Shuffle, SkipPrev, SkipNext, Repeat } from '@/components/icons'
import IconButton from '@/components/primitives/IconButton'
import PlayPauseButton from '@/components/primitives/PlayPauseButton'

/**
 * Props for {@link TransportControlBar} — a horizontal row of playback transport controls.
 */
export interface TransportControlBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current transport state — `true` shows the pause glyph on the central button. */
  playing: boolean
  /** Highlights the shuffle control in the brand accent when `true`. */
  shuffleOn?: boolean
  /** Highlights the repeat control in the brand accent when `true`. */
  repeatOn?: boolean
  /** Fired when the central play/pause button is tapped. */
  onPlayPause: () => void
  /** Fired when the skip-next button is tapped. */
  onNext: () => void
  /** Fired when the skip-previous button is tapped. */
  onPrev: () => void
  /** Fired when the shuffle button is tapped. */
  onShuffle?: () => void
  /** Fired when the repeat button is tapped. */
  onRepeat?: () => void
}

/**
 * Row of playback controls: shuffle, previous, play/pause, next, repeat.
 *
 * Spreads the five controls evenly across the full width. The shuffle and
 * repeat toggles switch to the brand accent when their `*On` flag is set.
 */
export function TransportControlBar({
  playing,
  shuffleOn = false,
  repeatOn = false,
  onPlayPause,
  onNext,
  onPrev,
  onShuffle,
  onRepeat,
  className,
  ...rest
}: TransportControlBarProps) {
  return (
    <div className={cn('flex items-center justify-between w-full', className)} {...rest}>
      <IconButton
        icon={<Shuffle />}
        ariaLabel="Shuffle"
        size={24}
        className={shuffleOn ? 'text-primary' : 'text-white'}
        onClick={onShuffle}
      />
      <IconButton icon={<SkipPrev />} ariaLabel="Previous" size={40} onClick={onPrev} />
      <PlayPauseButton playing={playing} onClick={onPlayPause} />
      <IconButton icon={<SkipNext />} ariaLabel="Next" size={40} onClick={onNext} />
      <IconButton
        icon={<Repeat />}
        ariaLabel="Repeat"
        size={24}
        className={repeatOn ? 'text-primary' : 'text-white'}
        onClick={onRepeat}
      />
    </div>
  )
}

export default TransportControlBar
