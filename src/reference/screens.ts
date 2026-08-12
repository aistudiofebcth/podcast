/**
 * UI Screen reference — the source designs for this design system.
 *
 * The environment blocks downloading Figma asset files, so instead of static
 * exports each screen carries a deep link to its exact node in the Figma file.
 * Open any link (or hand it to Claude Code with the Figma MCP) to reference the
 * real design while building. A handful of screens are reproduced 1:1 in
 * `src/screens/` — those set `reproduced: true`.
 */
const FILE_BASE =
  'https://www.figma.com/design/yDptxi61nJ5FgxfOPNi7mR/ZenTune-Music-Streaming-Mobile-UI-Kit'

/** The whole "↪︎ UI Screens" board (all 37 screens at once). */
export const BOARD_URL = `${FILE_BASE}?node-id=3-88&m=dev`

/** Build a Figma dev-mode deep link for a node id (":" or "-" form accepted). */
export function figmaUrl(nodeId: string): string {
  return `${FILE_BASE}?node-id=${nodeId.replace(':', '-')}&m=dev`
}

export interface ScreenRef {
  name: string
  nodeId: string
  /** true when a pixel-faithful React version exists in src/screens/. */
  reproduced?: boolean
}

export interface ScreenGroup {
  title: string
  screens: ScreenRef[]
}

export const SCREEN_GROUPS: ScreenGroup[] = [
  {
    title: 'Onboarding & Auth',
    screens: [
      { name: 'Splash', nodeId: '2003:5265' },
      { name: 'Splash (alt)', nodeId: '2010:16220' },
      { name: 'Splash (alt 2)', nodeId: '2003:8511' },
      { name: 'Get Started', nodeId: '2003:5278' },
      { name: 'Get Started (alt)', nodeId: '2010:16185' },
      { name: 'Get Started (alt 2)', nodeId: '2003:8478' },
      { name: 'Onboarding', nodeId: '2003:3141' },
      { name: 'Onboarding / Email', nodeId: '2003:3269' },
      { name: 'Onboarding / Password', nodeId: '2003:3374' },
      { name: 'Onboarding / Date of birth', nodeId: '2003:3483' },
      { name: 'Onboarding / Gender', nodeId: '2003:3545' },
      { name: 'Select artists', nodeId: '2003:4199' },
      { name: 'Log in', nodeId: '2003:5316', reproduced: true },
      { name: 'Log in (alt)', nodeId: '2010:16109' },
      { name: 'Log in (alt 2)', nodeId: '2010:16147' },
      { name: 'Notification', nodeId: '2003:3181' },
      { name: 'Finishing Up', nodeId: '2003:3238' },
      { name: 'Successful', nodeId: '2003:3252' },
    ],
  },
  {
    title: 'Home & Browse',
    screens: [
      { name: 'Your Studio', nodeId: '2003:6330', reproduced: true },
      { name: 'Library', nodeId: '2003:6149' },
      { name: 'Library (alt)', nodeId: '2003:6496' },
      { name: 'Library (alt 2)', nodeId: '2003:6709' },
      { name: 'Search', nodeId: '2003:6775' },
      { name: 'Search (alt)', nodeId: '2003:6882' },
      { name: 'Search (alt 2)', nodeId: '2003:7047' },
      { name: 'Playlist', nodeId: '2003:6027' },
      { name: 'Playlist name', nodeId: '2003:7141' },
      { name: 'Player', nodeId: '2003:6415', reproduced: true },
    ],
  },
  {
    title: 'Settings & Profile',
    screens: [
      { name: 'Settings', nodeId: '2003:8824', reproduced: true },
      { name: 'Profile', nodeId: '2003:8775' },
      { name: 'Password', nodeId: '2003:8736' },
      { name: 'Notifications', nodeId: '2003:8715' },
      { name: 'About Us', nodeId: '2003:8703' },
      { name: 'Terms & Condition', nodeId: '2003:8691' },
      { name: 'Rating', nodeId: '2003:8636' },
      { name: 'Rating (alt)', nodeId: '2003:8663' },
      { name: 'Log Out', nodeId: '2010:16707' },
    ],
  },
]

/** Flat list of every screen. */
export const ALL_SCREENS: ScreenRef[] = SCREEN_GROUPS.flatMap((g) => g.screens)
