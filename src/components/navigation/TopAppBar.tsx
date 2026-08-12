import * as React from 'react'
import { cn } from '@/lib/cn'
import IconButton from '@/components/primitives/IconButton'
import { ChevronLeft } from '@/components/icons'

export type TopAppBarVariant = 'detail' | 'dashboard'

export interface TopAppBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Screen title. Centered in `detail`, large left-aligned in `dashboard`. */
  title?: string
  /** `detail` = centered title with optional back button; `dashboard` = large left title. */
  variant?: TopAppBarVariant
  /** Back handler. When set (and no custom `leading`), renders a ChevronLeft IconButton. */
  onBack?: () => void
  /** Custom leading node; overrides the default back button. */
  leading?: React.ReactNode
  /** Trailing node pushed to the right (e.g. a search IconButton). */
  trailing?: React.ReactNode
  /** Transparent background instead of the solid `background` fill. */
  transparent?: boolean
}

/**
 * Screen header for ZenTune.
 *
 * The `detail` variant centers the title between an optional leading back
 * button and a trailing action. The `dashboard` variant shows a large
 * left-aligned title with the trailing action pushed to the right edge.
 */
export const TopAppBar = React.forwardRef<HTMLElement, TopAppBarProps>(function TopAppBar(
  { title, variant = 'detail', onBack, leading, trailing, transparent = false, className, ...rest },
  ref,
) {
  const isDashboard = variant === 'dashboard'

  const leadingNode =
    leading ??
    (onBack ? (
      <IconButton icon={<ChevronLeft />} ariaLabel="Back" onClick={onBack} size={40} />
    ) : null)

  return (
    <header
      ref={ref}
      className={cn(
        'relative flex h-[70px] w-full items-center',
        isDashboard ? 'px-[15px]' : 'px-[28px]',
        transparent ? 'bg-transparent' : 'bg-background',
        className,
      )}
      {...rest}
    >
      {isDashboard ? (
        <>
          {leadingNode}
          {title && <h1 className="type-heading-2 text-content">{title}</h1>}
          {trailing && <div className="ml-auto flex items-center">{trailing}</div>}
        </>
      ) : (
        <>
          {leadingNode}
          {title && (
            <h1 className="type-body-lg absolute left-1/2 -translate-x-1/2 text-content">
              {title}
            </h1>
          )}
          {trailing && <div className="ml-auto flex items-center">{trailing}</div>}
        </>
      )}
    </header>
  )
})

export default TopAppBar
