import * as React from 'react'
import { cn } from '@/lib/cn'

/** Centered placeholder shown when a list or screen has no content. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Primary headline describing the empty condition. */
  headline: string
  /** Optional supporting sentence beneath the headline. */
  supportingText?: string
  /** Optional visual (illustration, icon, artwork) rendered above the text. */
  preview?: React.ReactNode
}

/**
 * Empty state.
 *
 * A centered column pairing an optional preview visual with a headline and
 * supporting text. Used when a collection, search, or screen has nothing to
 * show yet.
 */
export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { headline, supportingText, preview, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center gap-3 w-[343px]', className)}
      {...rest}
    >
      {preview}
      <h3 className="type-heading-3 text-content">{headline}</h3>
      {supportingText && <p className="type-body text-content-muted">{supportingText}</p>}
    </div>
  )
})

export default EmptyState
