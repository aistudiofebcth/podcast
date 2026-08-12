import * as React from 'react'
import { cn } from '@/lib/cn'

export type IconButtonShape = 'circle' | 'square'
export type IconButtonFill = 'transparent' | 'glass' | 'solid-white'
export type IconButtonSize = 24 | 40 | 70

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** The glyph to render (an icon from `@/components/icons`). */
  icon: React.ReactNode
  shape?: IconButtonShape
  /** `transparent` nav hit-area, `glass` translucent white, or `solid-white` filled. */
  fill?: IconButtonFill
  /** Tap-target diameter/side in px. */
  size?: IconButtonSize
  /** Glyph size in px (defaults derived from `size`). */
  iconSize?: number
  /** Required for accessibility — icon-only controls have no text. */
  ariaLabel: string
}

const FILL: Record<IconButtonFill, string> = {
  transparent: 'bg-transparent text-icon active:bg-white-150',
  glass: 'bg-white-600 text-ink backdrop-blur-md active:bg-white-500',
  'solid-white': 'bg-white-900 text-ink active:bg-white-600',
}

const DEFAULT_ICON_SIZE: Record<IconButtonSize, number> = { 24: 24, 40: 20, 70: 32 }

/**
 * Icon-only tap target.
 *
 * Covers the whole ZenTune family of glyph buttons: transparent nav hit-areas,
 * translucent circular back/favourite/settings buttons, and small in-field
 * toggles. Always pass `ariaLabel` — there is no visible text.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, shape = 'circle', fill = 'transparent', size = 40, iconSize, ariaLabel, className, ...rest },
  ref,
) {
  const glyph = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
        size: iconSize ?? DEFAULT_ICON_SIZE[size],
      })
    : icon

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      style={{ width: size, height: size }}
      className={cn(
        'inline-grid shrink-0 place-items-center transition-colors duration-150 ease-zen',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        'disabled:pointer-events-none disabled:opacity-40',
        shape === 'circle' ? 'rounded-full' : 'rounded-lg',
        FILL[fill],
        className,
      )}
      {...rest}
    >
      {glyph}
    </button>
  )
})

export default IconButton
