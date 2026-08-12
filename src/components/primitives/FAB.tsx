import * as React from 'react'
import { cn } from '@/lib/cn'

export type FABVariant = 'primary' | 'light'
export type FABSize = 70 | 86

export interface FABProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Visual style. `primary` = orange fill / white icon; `light` = white fill / ink icon. */
  variant?: FABVariant
  /** The glyph to render (an icon from `@/components/icons`). */
  icon: React.ReactNode
  /** Tap-target diameter in px. */
  size?: FABSize
  /** Required for accessibility — icon-only controls have no text. */
  ariaLabel: string
}

const VARIANT: Record<FABVariant, string> = {
  primary: 'bg-primary text-white active:bg-primary-700',
  light: 'bg-white-900 text-ink active:bg-white-600',
}

/**
 * Circular floating action button with an elevated key shadow. Anchors the
 * primary create/compose gesture (e.g. add playlist) above the content plane.
 * Always pass `ariaLabel` — there is no visible text.
 */
export const FAB = React.forwardRef<HTMLButtonElement, FABProps>(function FAB(
  { variant = 'primary', icon, size = 70, ariaLabel, className, ...rest },
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
        'grid shrink-0 place-items-center rounded-full shadow-fab transition-colors duration-150 ease-zen',
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
})

export default FAB
