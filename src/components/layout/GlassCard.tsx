import * as React from 'react'
import { cn } from '@/lib/cn'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Translucency level of the white fill. */
  opacity?: '200' | '250' | '350'
  /** Custom backdrop blur radius in px (overrides the default lg blur). */
  blur?: number
  /** Custom border radius in px (overrides the default glass radius). */
  radius?: number
  /** Card contents. */
  children: React.ReactNode
}

const FILL: Record<NonNullable<GlassCardProps['opacity']>, string> = {
  '200': 'bg-white-200',
  '250': 'bg-white-250',
  '350': 'bg-white-350',
}

/**
 * Frosted translucent surface card.
 *
 * A bordered white-tint panel with a backdrop blur, used for glass overlays and
 * grouped content. `opacity` selects the fill strength; `radius`/`blur` allow
 * exact pixel overrides of the default glass rounding and blur.
 */
export function GlassCard({
  opacity = '200',
  blur,
  radius,
  children,
  className,
  style,
  ...rest
}: GlassCardProps) {
  const custom = radius !== undefined || blur !== undefined

  return (
    <div
      className={cn(
        'border border-white-250',
        FILL[opacity],
        !custom && 'rounded-glass backdrop-blur-lg',
        className,
      )}
      style={{
        ...(radius !== undefined ? { borderRadius: radius } : null),
        ...(blur !== undefined
          ? {
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
            }
          : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default GlassCard
