import * as React from 'react'
import { cn } from '@/lib/cn'

export type HomeIndicatorTheme = 'dark' | 'light'

export interface HomeIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Screen background the handle sits on. `dark` = light handle; `light` = ink handle. */
  theme?: HomeIndicatorTheme
}

const HANDLE: Record<HomeIndicatorTheme, string> = {
  dark: 'bg-white-900',
  light: 'bg-ink',
}

/**
 * iOS home-indicator handle pinned to the bottom safe area. Purely decorative
 * device chrome — the pill contrasts against the current screen theme.
 */
export const HomeIndicator = React.forwardRef<HTMLDivElement, HomeIndicatorProps>(
  function HomeIndicator({ theme = 'dark', className, ...rest }, ref) {
    return (
      <div
        ref={ref}
        aria-hidden
        className={cn('grid h-[15px] w-full place-items-center', className)}
        {...rest}
      >
        <div className={cn('h-[5px] w-[134px] rounded-full', HANDLE[theme])} />
      </div>
    )
  },
)

export default HomeIndicator
