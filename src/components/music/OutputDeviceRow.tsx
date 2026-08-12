import * as React from 'react'
import { cn } from '@/lib/cn'
import { Bluetooth } from '@/components/icons'

/**
 * Props for {@link OutputDeviceRow} — a labeled audio-output destination row.
 */
export interface OutputDeviceRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading glyph. Defaults to a Bluetooth icon. */
  icon?: React.ReactNode
  /** Name of the current output device (e.g. `AirPods Pro`). */
  deviceName: string
}

/**
 * Displays the active audio-output device with a leading icon and bold label.
 * Used in the now-playing sheet to surface where sound is currently routed.
 */
export function OutputDeviceRow({ icon, deviceName, className, ...rest }: OutputDeviceRowProps) {
  return (
    <div className={cn('flex items-center gap-[11px] text-white', className)} {...rest}>
      {icon ?? <Bluetooth size={24} />}
      <span className="type-body-bold">{deviceName}</span>
    </div>
  )
}

export default OutputDeviceRow
