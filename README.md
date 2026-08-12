# FEBC Podcast Design System

A production-ready **React + TypeScript + Tailwind** design system for
**FEBC Christian Media** podcast/streaming apps. Its structure and measurements
were generated via the Figma MCP server from a
[music-streaming Figma UI kit](https://www.figma.com/design/yDptxi61nJ5FgxfOPNi7mR/ZenTune-Music-Streaming-Mobile-UI-Kit),
then themed to the FEBC brand (deep teal + sky blue).

It ships the full stack of a design system:

- **Design tokens** — colors, type, spacing, radii, shadows, and blur extracted
  from the Figma variables, exposed as JSON, CSS custom properties, and a wired
  Tailwind theme. Dark (signature) and light themes, themed to the **FEBC
  Christian Media** palette — deep teal `#014f6e` + sky-blue `#85bdd6`.
- **Component library** — ~40 accessible, typed React components, from
  primitives (Button, IconButton, TextField) to organisms (TrackRow, FullPlayer,
  BottomNav, PlaylistHeader).
- **Demo screens** — Login, Home / Your Studio, Player, and Settings composed
  from the library.
- **Living showcase** — an in-app gallery documenting every token and component.

## Quickstart

```bash
npm install
npm run dev        # start the showcase at http://localhost:5173
npm run build      # typecheck + production build
npm run typecheck  # types only
```

## Using the library

```tsx
import { Button, TrackRow, BottomNav } from '@/components'

function Example() {
  return <Button variant="primary" label="Log in" fullWidth />
}
```

Every component reads its colors, radii, and type from the token layer, so
switching a screen to the light theme is a single attribute:

```tsx
import { Screen } from '@/components'

<Screen theme="light">{/* home / library / artist-select screens */}</Screen>
```

## Project structure

```
src/
  tokens/          design-tokens.json (source of truth) + typed tokens.ts
  styles/          tokens.css (CSS variables) + globals.css (type scale, glass)
  lib/cn.ts        Tailwind class-merge helper
  components/
    icons/         self-contained line-icon set
    primitives/    Button, IconButton, CircularIconButton, FAB, PlayPauseButton, Divider, HomeIndicator
    forms/         TextField, SearchBar, Chip, ToggleSwitch, Checkbox, SegmentedControl, RatingStars, ProgressSlider
    media/         Avatar, AvatarStack, Logo, IconBadge, SelectionBadge, AlbumThumbnail, StatTile, AlbumCard, ArtistCard
    navigation/    TopAppBar, BottomNav, ListRow, PaginationDots
    layout/        SectionHeader, CardCarousel, GlassCard, Screen
    feedback/      Sheet, EmptyState, OnboardingText
    music/         TrackRow, MiniPlayer, PlaylistHeader, FullPlayer, TransportControlBar, OutputDeviceRow, CollectionPanel, ActivityCard, PlaylistDeckHeader
  screens/         LoginScreen, HomeScreen, PlayerScreen, SettingsScreen
tailwind.config.ts theme wired to the tokens
```

## Documentation

- **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** — full token reference,
  theming model, and component catalog.
- **[docs/UI_SCREENS.md](docs/UI_SCREENS.md)** — the 37 source UI screens with
  Figma deep links, to reference the real designs while building (great to hand
  to Claude Code with the Figma MCP).

---

Tokens and specs extracted from Figma with the Figma MCP server; components
authored to match the kit's measurements, variants, and states.
