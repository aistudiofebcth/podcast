import * as React from 'react'
import { cn } from '@/lib/cn'

export type DividerTone = 'light' | 'dark'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Contrast treatment. `light` for use on dark screens; `dark` for light surfaces. */
  tone?: DividerTone
}

const TONE: Record<DividerTone, string> = {
  light: 'bg-white-200',
  dark: 'bg-dark-250',
}

/**
 * Hairline separator — a 1px full-width rule between list rows and sections.
 * Exposes `role="separator"` for assistive tech.
 */
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(function Divider(
  { tone = 'light', className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="separator"
      className={cn('h-px w-full', TONE[tone], className)}
      {...rest}
    />
  )
})

export default Divider
