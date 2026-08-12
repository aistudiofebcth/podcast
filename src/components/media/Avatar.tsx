import * as React from 'react'
import { cn } from '@/lib/cn'

export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Image source URL. */
  src: string
  /** Required alternative text for the image. */
  alt: string
  /** Square pixel size (width == height). Defaults to 126. */
  size?: number
  /** `circle` (default) rounds fully; `square` uses a 16px radius. */
  shape?: 'circle' | 'square'
  /** Render a bottom-center "Change" pill overlay. */
  editable?: boolean
  /** Called when the "Change" pill is tapped. */
  onEdit?: () => void
}

/**
 * Profile avatar image.
 *
 * A fixed-square photo rendered as a circle or rounded square. When `editable`
 * is set, a translucent "Change" pill sits at the bottom-center and calls
 * `onEdit` on tap — the pattern used on the ZenTune profile screen.
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { src, alt, size = 126, shape = 'circle', editable = false, onEdit, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{ width: size, height: size }}
      className={cn('relative inline-block', className)}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'size-full object-cover',
          shape === 'circle' ? 'rounded-full' : 'rounded-[16px]',
        )}
      />
      {editable && (
        <button
          type="button"
          onClick={onEdit}
          className={cn(
            'absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full',
            'bg-dark-650 px-3 py-1 text-white type-caption backdrop-blur-md',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          )}
        >
          Change
        </button>
      )}
    </div>
  )
})

export default Avatar
