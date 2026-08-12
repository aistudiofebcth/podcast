import * as React from 'react'
import { cn } from '@/lib/cn'

export type SocialProvider = 'apple' | 'google' | 'facebook'
export type SocialButtonVariant = 'filled' | 'outline'

export interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Which identity provider this button authenticates with. */
  provider: SocialProvider
  /** `filled` = brand-primary pill; `outline` = bordered on the surface. */
  variant?: SocialButtonVariant
  /** Override the default `Continue with <Provider>` label. */
  label?: string
  /** Stretch to the container width. */
  fullWidth?: boolean
}

const MARK: Record<SocialProvider, React.ReactNode> = {
  apple: (
    <path d="M16.37 1.43c0 1.06-.4 2.05-1.06 2.79-.79.9-2.05 1.6-3.1 1.5-.13-1.05.4-2.16 1-2.84.68-.78 1.9-1.37 2.86-1.45.02.12.3.12.3 0zM20 17.2c-.5 1.15-.73 1.66-1.36 2.68-.89 1.42-2.14 3.2-3.7 3.2-1.36.02-1.7-.9-3.57-.88-1.86 0-2.24.9-3.6.88-1.55-.02-2.73-1.61-3.62-3.03C1.6 16.36 1.35 11.7 2.85 9.2 3.92 7.44 5.6 6.4 7.2 6.4c1.6 0 2.62.9 3.95.9 1.3 0 2.09-.9 3.95-.9 1.42 0 2.92.78 3.99 2.11-3.5 1.92-2.93 6.92.34 8.2z" />
  ),
  google: (
    <path d="M21.35 11.1H12v3.83h5.35c-.5 2.4-2.55 3.7-5.35 3.7A5.8 5.8 0 1 1 15.77 8.2l2.85-2.85A9.75 9.75 0 1 0 12 21.75c5.63 0 9.55-3.96 9.55-9.54 0-.64-.07-1.1-.2-1.11z" />
  ),
  facebook: (
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  ),
}

const LABEL: Record<SocialProvider, string> = {
  apple: 'Continue with Apple',
  google: 'Continue with Google',
  facebook: 'Continue with Facebook',
}

/**
 * Social sign-in button.
 *
 * A pill with a provider glyph and label, used on the ZenTune auth screens.
 * `filled` renders the brand-primary CTA; `outline` is the bordered alternative
 * for stacking multiple providers.
 */
export const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  function SocialButton({ provider, variant = 'filled', label, fullWidth = false, className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex h-14 select-none items-center justify-center gap-2.5 rounded-full px-6',
          'type-body-bold transition-colors duration-150 ease-zen',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          variant === 'filled'
            ? 'bg-primary text-white active:bg-primary-700'
            : 'bg-transparent text-content border border-stroke-strong active:bg-white-150',
          fullWidth ? 'w-full' : 'w-fit min-w-[220px]',
          className,
        )}
        {...rest}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false}>
          {MARK[provider]}
        </svg>
        {label ?? LABEL[provider]}
      </button>
    )
  },
)

export default SocialButton
