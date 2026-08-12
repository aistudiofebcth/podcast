import * as React from 'react'
import { cn } from '@/lib/cn'
import { Check } from '@/components/icons'

export interface CheckboxProps {
  /** Whether the box is checked. */
  checked: boolean
  /** Called with the next value when the box is toggled. */
  onChange: (v: boolean) => void
  /** Blocks interaction and dims the control. */
  disabled?: boolean
  /** Optional visible label rendered beside the box. */
  label?: string
  /** Id applied to the control, associated with the label. */
  id?: string
}

/**
 * Checkbox with an optional inline label.
 *
 * A `role="checkbox"` button drives accessibility while the box swaps between a
 * filled brand-teal state with a checkmark and an empty outlined state.
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  { checked, onChange, disabled = false, label, id },
  ref,
) {
  return (
    <label
      className={cn(
        'inline-flex select-none items-center gap-2.5',
        disabled ? 'pointer-events-none opacity-50' : 'cursor-pointer',
      )}
    >
      <button
        ref={ref}
        id={id}
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          'grid size-6 place-items-center rounded-[6px] transition-colors duration-150 ease-zen',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          checked ? 'bg-primary text-white' : 'border border-white-350',
        )}
      >
        {checked && <Check size={16} />}
      </button>
      {label && <span className="type-body text-content">{label}</span>}
    </label>
  )
})

export default Checkbox
