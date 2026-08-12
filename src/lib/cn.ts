import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
