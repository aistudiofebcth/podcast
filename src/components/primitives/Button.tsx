import * as React from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'light' | 'secondary'
export type ButtonSize = 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = teal fill; `light` = white fill / teal label (e.g. Log Out); `secondary` = outlined. */
  variant?: ButtonVariant
  /** `lg` (68px, 18px label) is the default CTA; `md` (56px, 16px label) is compact. */
  size?: ButtonSize
  /** Convenience text label. You can also pass `children`. */
  label?: string
  /** Optional 24px leading glyph rendered before the label. */
  leadingIcon?: React.ReactNode
  /** Stretch to fill the container width instead of hugging content. */
  fullWidth?: boolean
  /** Show a spinner and block interaction. */
  loading?: boolean
}

const VARIANT: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white active:bg-primary-700',
  light: 'bg-white-900 text-primary active:bg-white-600',
  secondary: 'bg-transparent text-content border border-stroke-strong active:bg-white-150',
}

const SIZE: Record<ButtonSize, string> = {
  lg: 'h-[68px] px-6 text-body-lg font-semibold',
  md: 'h-14 px-6 text-body font-bold',
}

/**
 * Primary pill-shaped call-to-action.
 *
 * Full-radius, centered label, optional leading icon. The brand teal
 * `primary` variant drives every affirmative CTA in ZenTune; `light` is the
 * inverted treatment used for destructive/secondary actions like Log Out.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'lg',
    label,
    leadingIcon,
    fullWidth = false,
    loading = false,
    disabled,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        'inline-flex select-none items-center justify-center gap-2.5 rounded-full',
        'font-sans transition-colors duration-150 ease-zen',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        VARIANT[variant],
        SIZE[size],
        fullWidth ? 'w-full' : 'w-fit min-w-[200px]',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {leadingIcon && <span className="grid size-6 place-items-center">{leadingIcon}</span>}
          {label ?? children}
        </>
      )}
    </button>
  )
})

function Spinner() {
  return (
    <svg className="size-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default Button
