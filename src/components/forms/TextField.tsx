import * as React from 'react'
import { cn } from '@/lib/cn'
import { ChevronDown, Eye, EyeOff } from '@/components/icons'

export type TextFieldType = 'text' | 'email' | 'password' | 'select' | 'date'

export interface TextFieldProps {
  /** External label rendered above the field. */
  label?: string
  /** Current value (controlled). */
  value: string
  /** Called with the next string value on user input. */
  onChangeText: (v: string) => void
  /** Placeholder shown when the value is empty. */
  placeholder?: string
  /** Field behaviour. `select`/`date` render a button trigger instead of an input. Defaults to `text`. */
  type?: TextFieldType
  /** Optional trailing glyph. For `date` this overrides the default trailing icon. */
  trailingIcon?: React.ReactNode
  /** For `select`/`date`: whether a value has been chosen (drives text colour). */
  selected?: boolean
  /** Neutral helper text rendered below the field. */
  helperText?: string
  /** Error message; when present the field turns warning-coloured and this replaces the helper text. */
  error?: string
  /** Dims the field and blocks interaction. */
  disabled?: boolean
  /** DOM id, wired to the label's `htmlFor`. */
  id?: string
}

/**
 * Filled, pill-shaped single-line input with an external top label and optional
 * helper/error text. `password` adds a show/hide toggle; `select` and `date`
 * render a button trigger (chevron / custom icon) instead of a text input.
 */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  {
    label,
    value,
    onChangeText,
    placeholder,
    type = 'text',
    trailingIcon,
    selected = false,
    helperText,
    error,
    disabled = false,
    id,
  },
  ref,
) {
  const reactId = React.useId()
  const fieldId = id ?? reactId
  const hasError = Boolean(error)
  const [revealed, setRevealed] = React.useState(false)

  const isTrigger = type === 'select' || type === 'date'
  const inputType = type === 'password' ? (revealed ? 'text' : 'password') : type

  const shell = cn(
    'h-12 w-full rounded-full bg-input-fill border border-input-border px-6 flex items-center gap-2.5',
    hasError && 'border-warning',
  )

  return (
    <div className={cn('w-full', disabled && 'opacity-50 pointer-events-none')}>
      {label && (
        <label htmlFor={fieldId} className="block type-body-bold text-content mb-2.5">
          {label}
        </label>
      )}

      {isTrigger ? (
        <button
          type="button"
          id={fieldId}
          disabled={disabled}
          className={shell}
          aria-invalid={hasError || undefined}
        >
          <span
            className={cn(
              'flex-1 text-left type-body-medium',
              selected && value ? 'text-white' : 'text-white-500',
            )}
          >
            {value || placeholder}
          </span>
          <span className="grid size-6 shrink-0 place-items-center text-icon">
            {type === 'select' ? <ChevronDown size={24} /> : trailingIcon}
          </span>
        </button>
      ) : (
        <div className={shell}>
          <input
            ref={ref}
            id={fieldId}
            type={inputType}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            onChange={(e) => onChangeText(e.target.value)}
            className="flex-1 bg-transparent outline-none type-body-medium text-white placeholder:text-white-500"
          />
          {type === 'password' ? (
            <span
              role="button"
              tabIndex={0}
              aria-label={revealed ? 'Hide password' : 'Show password'}
              onClick={() => setRevealed((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setRevealed((v) => !v)
                }
              }}
              className="grid size-6 shrink-0 cursor-pointer place-items-center text-icon"
            >
              {revealed ? <EyeOff size={24} /> : <Eye size={24} />}
            </span>
          ) : (
            trailingIcon && (
              <span className="grid size-6 shrink-0 place-items-center text-icon">{trailingIcon}</span>
            )
          )}
        </div>
      )}

      {hasError ? (
        <p className="type-caption text-warning mt-2">{error}</p>
      ) : (
        helperText && <p className="type-caption text-content-muted mt-2">{helperText}</p>
      )}
    </div>
  )
})

export default TextField
