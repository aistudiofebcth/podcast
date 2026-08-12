import * as React from 'react'
import { cn } from '@/lib/cn'

export type CircularIconButtonVariant = 'primary-filled' | 'outlined'
export type CircularIconButtonSize = 49 | 58

export interface CircularIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Visual style. `outlined` = transparent bg + primary border/icon; `primary-filled` = teal fill + white icon. */
  variant?: CircularIconButtonVariant
  /** The glyph to render (an icon from `@/components/icons`). */
  icon: React.ReactNode
  /** Tap-target diameter in px. */
  size?: CircularIconButtonSize
  /** Required for accessibility — icon-only controls have no text. */
  ariaLabel: string
}

const VARIANT: Record<CircularIconButtonVariant, string> = {
  'primary-filled': 'bg-primary text-white active:bg-primary-700',
  outlined: 'bg-transparent text-primary border border-primary active:bg-white-150',
}

/**
 * Larger circular action button for card and header controls (edit pencil,
 * inline play). Outlined by default with a 1px brand-teal ring; the
 * `primary-filled` treatment is the solid-teal emphasis variant. Always pass
 * `ariaLabel` — there is no visible text.
 */
export const CircularIconButton = React.forwardRef<HTMLButtonElement, CircularIconButtonProps>(
  function CircularIconButton(
    { variant = 'outlined', icon, size = 58, ariaLabel, className, ...rest },
    ref,
  ) {
    const glyph = React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 28 })
      : icon

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        style={{ width: size, height: size }}
        className={cn(
          'grid shrink-0 place-items-center rounded-full transition-colors duration-150 ease-zen',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'disabled:pointer-events-none disabled:opacity-40',
          VARIANT[variant],
          className,
        )}
        {...rest}
      >
        {glyph}
      </button>
    )
  },
)

export default CircularIconButton
