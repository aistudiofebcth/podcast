import * as React from 'react'
import { cn } from '@/lib/cn'

export interface AvatarStackItem {
  /** Image source URL. */
  src: string
  /** Optional alternative text for the image. */
  alt?: string
  /** `circle` (default) or a tilted rounded `square`. */
  shape?: 'circle' | 'square'
}

export interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ordered list of avatars to lay out left-to-right. */
  avatars: AvatarStackItem[]
  /** Pixels each avatar overlaps the previous one. Defaults to 14. */
  overlap?: number
}

/**
 * Overlapping row of small (60px) avatars.
 *
 * Each avatar is nudged left onto the previous one by `overlap` and carries a
 * background-colored ring so the edges stay separated. Square variants tilt
 * slightly for the playful ZenTune "friends listening" cluster.
 */
export const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps>(function AvatarStack(
  { avatars, overlap = 14, className, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cn('flex', className)} {...rest}>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.alt ?? ''}
          style={{ marginLeft: index === 0 ? 0 : -overlap }}
          className={cn(
            'size-[60px] object-cover ring-2 ring-background',
            avatar.shape === 'square'
              ? 'rotate-[9deg] rounded-[12px] border-2 border-ink'
              : 'rounded-full',
          )}
        />
      ))}
    </div>
  )
})

export default AvatarStack
