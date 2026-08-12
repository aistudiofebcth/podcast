import * as React from 'react'
import { cn } from '@/lib/cn'

/** Short caption of onboarding/coach-mark copy overlaid on a screen. */
export interface OnboardingTextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'style'> {
  /** The caption copy to render. */
  text: string
  /** Text alignment. `center` also horizontally centers the block. */
  align?: 'center' | 'left'
  /** Maximum line width in px. */
  maxWidth?: number
}

/**
 * Onboarding text.
 *
 * A single caption-sized paragraph of white onboarding copy, constrained to a
 * max width and optionally centered. Used for coach marks and first-run hints
 * layered over dark imagery.
 */
export const OnboardingText = React.forwardRef<HTMLParagraphElement, OnboardingTextProps>(
  function OnboardingText({ text, align = 'center', maxWidth = 313, className, ...rest }, ref) {
    return (
      <p
        ref={ref}
        style={{ textAlign: align, maxWidth }}
        className={cn('type-caption text-white', align === 'center' && 'mx-auto', className)}
        {...rest}
      >
        {text}
      </p>
    )
  },
)

export default OnboardingText
