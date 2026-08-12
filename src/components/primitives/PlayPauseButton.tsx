import * as React from 'react'
import { cn } from '@/lib/cn'
import { Play, Pause } from '@/components/icons'

export interface PlayPauseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Current transport state — `true` shows the pause glyph, `false` shows play. */
  playing: boolean
  /** Tap-target diameter in px. */
  size?: number
}

/**
 * Emphasized transport button — the central play/pause control of the ZenTune
 * player. Solid brand-orange circle; swaps between the filled Play and Pause
 * glyphs based on `playing`. The accessible label reflects the current action.
 */
export const PlayPauseButton = React.forwardRef<HTMLButtonElement, PlayPauseButtonProps>(
  function PlayPauseButton({ playing, size = 52, className, ...rest }, ref) {
    const glyphSize = Math.max(24, Math.round(size * 0.5))

    return (
      <button
        ref={ref}
        type="button"
        aria-label={playing ? 'Pause' : 'Play'}
        style={{ width: size, height: size }}
        className={cn(
          'grid shrink-0 place-items-center rounded-full bg-primary text-white',
          'transition-colors duration-150 ease-zen active:bg-primary-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'disabled:pointer-events-none disabled:opacity-40',
          className,
        )}
        {...rest}
      >
        {playing ? <Pause size={glyphSize} /> : <Play size={glyphSize} />}
      </button>
    )
  },
)

export default PlayPauseButton
