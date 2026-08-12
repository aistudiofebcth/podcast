/**
 * ZenTune icon set — self-contained inline SVGs.
 *
 * Style: line/stroke (Hugeicons-like), 24×24 viewBox, `currentColor`, round
 * caps/joins, ~1.8px stroke. A handful of glyphs (play, pause, stars,
 * filled heart) render as solids. Color comes from the parent's text color,
 * so `text-primary`, `text-icon`, etc. all work.
 */
import * as React from 'react'

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Square pixel size (width == height). Defaults to 24. */
  size?: number
  /** Stroke width for outline glyphs. Defaults to 1.8. */
  strokeWidth?: number
}

interface BaseProps extends IconProps {
  filled?: boolean
  children: React.ReactNode
}

const IconBase = React.forwardRef<SVGSVGElement, BaseProps>(function IconBase(
  { size = 24, strokeWidth = 1.8, filled = false, children, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={rest['aria-label'] ? undefined : true}
      focusable={false}
      {...rest}
    >
      {children}
    </svg>
  )
})

type Icon = React.FC<IconProps>

/* ---- Navigation & chrome ------------------------------------------------ */
export const ChevronLeft: Icon = (p) => (
  <IconBase {...p}>
    <path d="M15 5l-7 7 7 7" />
  </IconBase>
)
export const ChevronRight: Icon = (p) => (
  <IconBase {...p}>
    <path d="M9 5l7 7-7 7" />
  </IconBase>
)
export const ChevronDown: Icon = (p) => (
  <IconBase {...p}>
    <path d="M5 9l7 7 7-7" />
  </IconBase>
)
export const ChevronUp: Icon = (p) => (
  <IconBase {...p}>
    <path d="M5 15l7-7 7 7" />
  </IconBase>
)
export const Close: Icon = (p) => (
  <IconBase {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </IconBase>
)
export const Search: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.6-3.6" />
  </IconBase>
)
export const Settings: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13a1.65 1.65 0 00.33 1.82l.05.05a2 2 0 11-2.83 2.83l-.05-.05a1.65 1.65 0 00-2.82 1.17V21a2 2 0 11-4 0v-.09A1.65 1.65 0 007.5 19.4a1.65 1.65 0 00-1.82.33l-.05.05a2 2 0 11-2.83-2.83l.05-.05A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 8.5a1.65 1.65 0 00-.33-1.82l-.05-.05a2 2 0 112.83-2.83l.05.05A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.05-.05a2 2 0 112.83 2.83l-.05.05A1.65 1.65 0 0019.4 9v.09z" />
  </IconBase>
)

/* ---- Bottom-nav destinations ------------------------------------------- */
export const Home: Icon = (p) => (
  <IconBase {...p}>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5.5 9.5V21h13V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </IconBase>
)
export const Library: Icon = (p) => (
  <IconBase {...p}>
    <path d="M4 19V7M8 19V5M12 19v-9" />
    <path d="M15.5 10.2l4.3-1.2v7.6a2 2 0 11-2-2c.7 0 1.4.3 1.8.8" />
  </IconBase>
)

/* ---- Playback ----------------------------------------------------------- */
export const Play: Icon = (p) => (
  <IconBase filled {...p}>
    <path d="M7 5.5v13a1 1 0 001.5.87l11-6.5a1 1 0 000-1.74l-11-6.5A1 1 0 007 5.5z" />
  </IconBase>
)
export const Pause: Icon = (p) => (
  <IconBase filled {...p}>
    <rect x="6.5" y="5" width="4" height="14" rx="1.3" />
    <rect x="13.5" y="5" width="4" height="14" rx="1.3" />
  </IconBase>
)
export const Stop: Icon = (p) => (
  <IconBase filled {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2.5" />
  </IconBase>
)
export const SkipNext: Icon = (p) => (
  <IconBase filled {...p}>
    <path d="M5 6.2v11.6a1 1 0 001.5.87L15 13v4.5a1 1 0 001.5.87l.5-.3V6.9l-.5-.3A1 1 0 0015 7.5V11L6.5 5.33A1 1 0 005 6.2z" />
    <rect x="17.4" y="6" width="2" height="12" rx="1" />
  </IconBase>
)
export const SkipPrev: Icon = (p) => (
  <IconBase filled {...p}>
    <path d="M19 6.2v11.6a1 1 0 01-1.5.87L9 13v4.5a1 1 0 01-1.5.87l-.5-.3V6.9l.5-.3A1 1 0 019 7.5V11l8.5-5.67A1 1 0 0119 6.2z" />
    <rect x="4.6" y="6" width="2" height="12" rx="1" />
  </IconBase>
)
export const Shuffle: Icon = (p) => (
  <IconBase {...p}>
    <path d="M4 7h3.2c1.1 0 2.1.5 2.8 1.4l4 5.2c.7.9 1.7 1.4 2.8 1.4H21" />
    <path d="M4 17h3.2c1.1 0 2.1-.5 2.8-1.4l.9-1.2" />
    <path d="M13.3 9.6l.9-1.2c.7-.9 1.7-1.4 2.8-1.4H21" />
    <path d="M18.5 4.5L21 7l-2.5 2.5M18.5 12.5L21 15l-2.5 2.5" />
  </IconBase>
)
export const Repeat: Icon = (p) => (
  <IconBase {...p}>
    <path d="M17 3l3 3-3 3" />
    <path d="M20 6H8a4 4 0 00-4 4v1" />
    <path d="M7 21l-3-3 3-3" />
    <path d="M4 18h12a4 4 0 004-4v-1" />
  </IconBase>
)
export const Bluetooth: Icon = (p) => (
  <IconBase {...p}>
    <path d="M7 7.5l10 9-5 4.5V3l5 4.5-10 9" />
  </IconBase>
)
export const MusicNote: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    <path d="M9 18V6l12-2.5v12.5" />
  </IconBase>
)

/* ---- Actions & toggles -------------------------------------------------- */
export const Heart: Icon = (p) => (
  <IconBase {...p}>
    <path d="M12 20.3l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.54L12 20.3z" />
  </IconBase>
)
export const HeartFilled: Icon = (p) => (
  <IconBase filled {...p}>
    <path d="M12 20.3l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.55 11.54L12 20.3z" />
  </IconBase>
)
export const MoreHorizontal: Icon = (p) => (
  <IconBase filled {...p}>
    <circle cx="5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="19" cy="12" r="1.7" />
  </IconBase>
)
export const MoreVertical: Icon = (p) => (
  <IconBase filled {...p}>
    <circle cx="12" cy="5" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="12" cy="19" r="1.7" />
  </IconBase>
)
export const Plus: Icon = (p) => (
  <IconBase {...p}>
    <path d="M12 5v14M5 12h14" />
  </IconBase>
)
export const AddCircle: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8.5v7M8.5 12h7" />
  </IconBase>
)
export const Check: Icon = (p) => (
  <IconBase {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </IconBase>
)
export const Pencil: Icon = (p) => (
  <IconBase {...p}>
    <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </IconBase>
)
export const Eye: Icon = (p) => (
  <IconBase {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </IconBase>
)
export const EyeOff: Icon = (p) => (
  <IconBase {...p}>
    <path d="M9.9 5.2A9.6 9.6 0 0112 5c6.4 0 10 7 10 7a17 17 0 01-2.2 3.1M6.1 6.1A16.6 16.6 0 002 12s3.6 7 10 7a9.3 9.3 0 004-.9" />
    <path d="M9.9 9.9a3 3 0 004.2 4.2" />
    <path d="M2 2l20 20" />
  </IconBase>
)
export const Star: Icon = (p) => (
  <IconBase {...p}>
    <path d="M12 3.5l2.6 5.35 5.9.86-4.27 4.16 1 5.88L12 17.9l-5.28 2.71 1-5.88L3.46 9.7l5.9-.86L12 3.5z" />
  </IconBase>
)
export const StarFilled: Icon = (p) => (
  <IconBase filled {...p}>
    <path d="M12 3.5l2.6 5.35 5.9.86-4.27 4.16 1 5.88L12 17.9l-5.28 2.71 1-5.88L3.46 9.7l5.9-.86L12 3.5z" />
  </IconBase>
)

/* ---- Settings / profile glyphs ----------------------------------------- */
export const User: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5" />
  </IconBase>
)
export const Bell: Icon = (p) => (
  <IconBase {...p}>
    <path d="M18 8.5a6 6 0 10-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5z" />
    <path d="M13.7 20.5a2 2 0 01-3.4 0" />
  </IconBase>
)
export const Lock: Icon = (p) => (
  <IconBase {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2.5" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </IconBase>
)
export const Mail: Icon = (p) => (
  <IconBase {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </IconBase>
)
export const Calendar: Icon = (p) => (
  <IconBase {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 9.5h18M8 3v4M16 3v4" />
  </IconBase>
)
export const Logout: Icon = (p) => (
  <IconBase {...p}>
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <path d="M16 17l5-5-5-5M21 12H9" />
  </IconBase>
)
export const Info: Icon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="7.8" r="0.4" fill="currentColor" stroke="none" />
  </IconBase>
)
export const Shield: Icon = (p) => (
  <IconBase {...p}>
    <path d="M12 3l8 3v5.5c0 5-3.5 8.2-8 9.5-4.5-1.3-8-4.5-8-9.5V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </IconBase>
)

/** Name → component map, handy for data-driven rendering. */
export const icons = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: Close,
  search: Search,
  settings: Settings,
  home: Home,
  library: Library,
  play: Play,
  pause: Pause,
  stop: Stop,
  skipNext: SkipNext,
  skipPrev: SkipPrev,
  shuffle: Shuffle,
  repeat: Repeat,
  bluetooth: Bluetooth,
  musicNote: MusicNote,
  heart: Heart,
  heartFilled: HeartFilled,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  plus: Plus,
  addCircle: AddCircle,
  check: Check,
  pencil: Pencil,
  eye: Eye,
  eyeOff: EyeOff,
  star: Star,
  starFilled: StarFilled,
  user: User,
  bell: Bell,
  lock: Lock,
  mail: Mail,
  calendar: Calendar,
  logout: Logout,
  info: Info,
  shield: Shield,
} as const

export type IconName = keyof typeof icons
