import * as React from 'react'
import { FAB } from '@/components/primitives/FAB'
import { GlassCard } from '@/components/layout/GlassCard'
import { Close } from '@/components/icons'

export type SheetVariant = 'modal' | 'glass-sheet'

/** Overlay surface that dims the screen behind a dismissible panel. */
export interface SheetProps {
  /** Whether the overlay is mounted and visible. */
  open: boolean
  /** Called when the scrim (or dismiss control) is tapped. */
  onClose: () => void
  /** `modal` = centered opaque card; `glass-sheet` = bottom-anchored frosted sheet. */
  variant?: SheetVariant
  /** When set on the `modal` variant, renders a text dismiss control top-right. */
  dismissLabel?: string
  /** Panel contents. */
  children: React.ReactNode
}

/**
 * Overlay surface.
 *
 * Renders a blurred scrim over the screen with a dismissible panel on top.
 * The `modal` variant centers an opaque background card; the `glass-sheet`
 * variant anchors a frosted GlassCard to the bottom with an overlapping close
 * FAB. Tapping the scrim always calls `onClose`. Returns `null` when closed.
 */
export function Sheet({ open, onClose, variant = 'modal', dismissLabel, children }: SheetProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-scrim backdrop-blur-sm" onClick={onClose} />
      {variant === 'modal' ? (
        <div className="relative m-auto w-[343px] rounded-[24px] bg-background p-6">
          {dismissLabel && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 type-body-medium text-content-muted"
            >
              {dismissLabel}
            </button>
          )}
          {children}
        </div>
      ) : (
        <GlassCard className="relative mx-auto mt-auto w-[345px] rounded-t-glass p-6">
          <FAB
            variant="light"
            icon={<Close />}
            ariaLabel="Close"
            className="absolute left-1/2 -translate-x-1/2 -bottom-9"
            onClick={onClose}
          />
          {children}
        </GlassCard>
      )}
    </div>
  )
}

export default Sheet
