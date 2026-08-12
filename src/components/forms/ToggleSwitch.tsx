import * as React from 'react'
import { cn } from '@/lib/cn'

export interface ToggleSwitchProps {
  /** Whether the switch is in the on position. */
  checked: boolean
  /** Called with the next value when the switch is toggled. */
  onChange: (v: boolean) => void
  /** Blocks interaction and dims the control. */
  disabled?: boolean
  /** Accessible name for the switch (there is no visible label). */
  ariaLabel?: string
}

/**
 * Binary on/off switch.
 *
 * A `role="switch"` button whose 44×24 track flips fill and alignment between
 * the on (`bg-primary`, thumb right) and off (`bg-white-200`, thumb left)
 * states, sliding the white thumb across.
 */
export const ToggleSwitch = React.forwardRef<HTMLButtonElement, ToggleSwitchProps>(
  function ToggleSwitch({ checked, onChange, disabled = false, ariaLabel }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          'flex h-6 w-[44px] items-center rounded-full p-0.5 transition-colors duration-150 ease-zen',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          checked ? 'justify-end bg-primary' : 'justify-start bg-white-200',
        )}
      >
        <span className="size-5 rounded-full bg-white-900" />
      </button>
    )
  },
)

export default ToggleSwitch
