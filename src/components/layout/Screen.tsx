import * as React from 'react'
import { cn } from '@/lib/cn'

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Token theme for the frame. `light` applies the light-mode overrides; `dark` is the default root. */
  theme?: 'dark' | 'light'
  /** Screen contents. */
  children: React.ReactNode
}

/**
 * Mobile device frame (375x812) used to preview ZenTune screens.
 *
 * Wraps children in the `.zt-screen` surface and sets `data-theme="light"` when
 * the light theme is requested, flipping the semantic token palette. Dark is the
 * default root theme, so no attribute is emitted for it.
 */
export function Screen({ theme = 'dark', children, className, ...rest }: ScreenProps) {
  return (
    <div
      className={cn('zt-screen', className)}
      data-theme={theme === 'light' ? 'light' : undefined}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Screen
