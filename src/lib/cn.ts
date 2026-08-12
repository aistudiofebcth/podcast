import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge, taught about ZenTune's custom font-size utilities.
 *
 * Without this, `text-body-lg`, `text-heading-2`, etc. are indistinguishable
 * from text-*color* classes to tailwind-merge, so combining a size with a
 * color (e.g. `text-body-lg text-primary`) would silently drop the colour.
 * Registering them in the `font-size` group keeps size and colour independent.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: ['heading-1', 'heading-2', 'heading-3', 'body-lg', 'body', 'label', 'caption', 'micro'],
        },
      ],
    },
  },
})

/**
 * `cn` merges class names and resolves Tailwind conflicts.
 *
 * It combines {@link https://github.com/lukeed/clsx | clsx} (conditional class
 * joining) with {@link https://github.com/dcastil/tailwind-merge | tailwind-merge}
 * (last-wins conflict resolution), so component base styles can always be
 * overridden by a caller's `className`.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-primary', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
