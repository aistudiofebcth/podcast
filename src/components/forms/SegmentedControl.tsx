import * as React from 'react'
import { cn } from '@/lib/cn'

export interface SegmentedControlOption {
  /** Visible text for the option. */
  label: string
  /** Value emitted when the option is selected. */
  value: string
}

export interface SegmentedControlProps {
  /** Ordered options rendered as pill buttons. */
  options: SegmentedControlOption[]
  /** Currently selected value. */
  value: string
  /** Called with the value of the newly selected option. */
  onChange: (v: string) => void
  className?: string
}

/**
 * Single-select row of pill options.
 *
 * A `role="radiogroup"` of full-radius buttons; the selected pill inverts to a
 * solid dark fill while the rest stay outlined.
 */
export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControl({ options, value, onChange, className }, ref) {
    return (
      <div ref={ref} role="radiogroup" className={cn('flex gap-2', className)}>
        {options.map((option) => {
          const selected = option.value === value
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={cn(
                'h-[52px] rounded-full px-[18px] type-body-medium transition-colors duration-150 ease-zen',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                selected
                  ? 'bg-dark-900 text-white'
                  : 'border border-gray-500 bg-transparent text-content',
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    )
  },
)

export default SegmentedControl
