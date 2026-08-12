import * as React from 'react'
import { cn } from '@/lib/cn'
import { Close } from '@/components/icons'
import GlassCard from '@/components/layout/GlassCard'
import ProgressSlider from '@/components/forms/ProgressSlider'
import FAB from '@/components/primitives/FAB'
import TransportControlBar from '@/components/music/TransportControlBar'
import OutputDeviceRow from '@/components/music/OutputDeviceRow'

/**
 * Props for {@link FullPlayer} — the expanded now-playing glass sheet.
 */
export interface FullPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The track currently playing. */
  track: { title: string; artist: string }
  /** Current playback position. */
  progress: number
  /** Track length (total duration). */
  duration: number
  /** Current transport state — `true` shows the pause glyph. */
  playing: boolean
  /** Name of the active audio-output device. Defaults to `AirPods Pro`. */
  outputDevice?: string
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
  /** Fired with the seeked-to value when the progress track is tapped. */
  onSeek?: (v: number) => void
  /** Fired when the close FAB is tapped. */
  onClose: () => void
}

/**
 * Expanded now-playing sheet.
 *
 * A frosted glass card carrying the track title/artist, a seekable progress
 * bar, the full transport control row, and the active output device. A light
 * floating close button overhangs the bottom edge, centered.
 */
export function FullPlayer({
  track,
  progress,
  duration,
  playing,
  outputDevice,
  onPlayPause,
  onNext,
  onPrev,
  onShuffle,
  onRepeat,
  onSeek,
  onClose,
  className,
  ...rest
}: FullPlayerProps) {
  return (
    <div className={cn('relative', className)} {...rest}>
      <GlassCard className="w-[305px] rounded-glass p-6 flex flex-col gap-5">
        <div>
          <h3 className="type-heading-3 text-white">{track.title}</h3>
          <p className="type-caption text-content-muted mt-1">{track.artist}</p>
        </div>
        <ProgressSlider value={progress} max={duration} onSeek={onSeek} />
        <TransportControlBar
          playing={playing}
          onPlayPause={onPlayPause}
          onNext={onNext}
          onPrev={onPrev}
          onShuffle={onShuffle}
          onRepeat={onRepeat}
        />
        <OutputDeviceRow deviceName={outputDevice ?? 'AirPods Pro'} />
      </GlassCard>
      <FAB
        variant="light"
        icon={<Close />}
        ariaLabel="Close player"
        onClick={onClose}
        className="absolute left-1/2 -translate-x-1/2 -bottom-9"
      />
    </div>
  )
}

export default FullPlayer
