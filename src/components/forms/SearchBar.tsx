import * as React from 'react'
import { cn } from '@/lib/cn'
import { Search } from '@/components/icons'

export type SearchBarTheme = 'light' | 'onImage'

export interface SearchBarProps {
  /** Current query (controlled). */
  value: string
  /** Called with the next query string on input. */
  onChangeText: (v: string) => void
  /** Placeholder shown when empty. */
  placeholder?: string
  /** Called when the user submits (Enter). */
  onSubmit?: () => void
  /** `light` = solid white field on light backgrounds; `onImage` = translucent glass over artwork. Defaults to `onImage`. */
  theme?: SearchBarTheme
  /** Autofocus the field on mount. */
  autoFocus?: boolean
}

/**
 * Pill-shaped search field with a trailing search glyph. The `onImage` theme is
 * a translucent glass surface for placement over cover art; `light` is the solid
 * white treatment for light backgrounds. Submits on Enter.
 */
export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { value, onChangeText, placeholder, onSubmit, theme = 'onImage', autoFocus = false },
  ref,
) {
  const isLight = theme === 'light'

  return (
    <div
      className={cn(
        'h-12 w-full rounded-full px-6 flex items-center gap-2.5',
        isLight ? 'bg-white-900 border-2 border-dark-250 text-ink' : 'glass text-white',
      )}
    >
      <input
        ref={ref}
        type="search"
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit?.()
          }
        }}
        className={cn(
          'flex-1 bg-transparent outline-none type-body-medium',
          isLight ? 'placeholder:text-content-muted' : 'placeholder:text-white-500',
        )}
      />
      <span className="grid size-6 shrink-0 place-items-center">
        <Search size={24} />
      </span>
    </div>
  )
})

export default SearchBar
