import * as React from 'react'
import { cn } from '@/lib/cn'

export type ChipVariant = 'filter' | 'tag'
export type ChipTone = 'accent' | 'neutral' | 'dark'

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
  label: string
  /** `filter` = single-select genre pill; `tag` = static label on media cards. */
  variant?: ChipVariant
  /** Colour treatment. Ignored when `selected` (selected always uses the dark/accent fill). */
  tone?: ChipTone
  selected?: boolean
}

/**
 * Fully-rounded pill used both as a genre filter (Your Studio) and as a static
 * tag overlaid on media cards. Selected filters invert to a solid dark fill;
 * accent tags use the brand teal.
 */
export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { label, variant = 'filter', tone = 'neutral', selected = false, className, ...rest },
  ref,
) {
  const isFilter = variant === 'filter'

  const look = selected
    ? 'bg-content text-background border-transparent'
    : tone === 'accent'
      ? 'bg-primary text-white border-transparent'
      : tone === 'dark'
        ? 'bg-dark-250 text-white border-transparent backdrop-blur-md'
        : isFilter
          ? 'bg-transparent text-content border-gray-500'
          : 'bg-white-250 text-white border-transparent backdrop-blur-md'

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isFilter ? selected : undefined}
      className={cn(
        'inline-flex select-none items-center justify-center whitespace-nowrap rounded-full border',
        'type-body-medium transition-colors duration-150 ease-zen',
        isFilter ? 'h-[52px] px-[18px]' : 'h-[40px] px-[18px] text-body',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        look,
        className,
      )}
      {...rest}
    >
      {label}
    </button>
  )
})

export default Chip
