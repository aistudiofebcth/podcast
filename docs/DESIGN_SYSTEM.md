# ZenTune Design System — Reference

The canonical documentation for the ZenTune design system. Every value here is
extracted from the ZenTune Figma UI kit (file `yDptxi61nJ5FgxfOPNi7mR`) and is
the source of truth for the code in `src/`.

- [Foundations](#foundations)
  - [Themes](#themes)
  - [Color](#color)
  - [Typography](#typography)
  - [Spacing](#spacing)
  - [Radii](#radii)
  - [Elevation & blur](#elevation--blur)
  - [Iconography](#iconography)
- [Token architecture](#token-architecture)
- [Component catalog](#component-catalog)

---

## Foundations

### Themes

ZenTune runs **two themes** plus an on-image treatment:

| Theme | Canvas | Used by |
| --- | --- | --- |
| **Dark** (default/signature) | `#151515` | Auth, Onboarding, Settings, Profile, Rating, Player, Playlist |
| **Light** | `#ffffff` | Home / Your Studio, Library, Select artists |
| **On-image** | hero artwork + scrim + glass | Search, Playlist, Player overlays |

The dark theme is the root default. Set `data-theme="light"` on any container
(the `<Screen theme="light">` wrapper does this) to flip the semantic tokens.
Physical palette values (brand, whitescale/darkscale ramps) never change; only
the semantic aliases (`background`, `surface`, `content`, `border`, `icon`) do.

### Color

**Brand**

The palette follows **FEBC Christian Media**: a deep teal primary paired with a sky-blue accent.

| Token | Value | Role |
| --- | --- | --- |
| `primary` | `#014f6e` | Brand — FEBC deep teal. CTAs, play, selection, active states, headers |
| `primary-700` | `rgba(1,79,110,0.7)` | Hover / pressed / de-emphasized |
| `primary-150` | `rgba(1,79,110,0.15)` | Subtle wash / focus ring |
| `accent` | `#85bdd6` | Secondary — FEBC sky blue. Logo mark, highlights, secondary accents |
| `accent-700` | `rgba(133,189,214,0.7)` | Sky blue, pressed / de-emphasized |
| `accent-150` | `rgba(133,189,214,0.2)` | Sky blue tint — subtle wash |
| `warning` | `#e9a81c` | Warning + rating-star gold |

**Neutrals**

| Token | Value | Role |
| --- | --- | --- |
| `ink` / `background` (dark) | `#151515` | Near-black canvas |
| `white` | `#ffffff` | Pure white |
| `gray-700` / `input-fill` | `#717171` | Filled input surface / tertiary text |
| `gray-500` | `#c9c9c9` | Hairlines, unselected borders on light |

**Whitescale** — the core translucency ramp for glass, borders, and secondary
text on dark / on-image surfaces:

| Token | Value |
| --- | --- |
| `white-900` | `#ffffff` |
| `white-600` | `rgba(255,255,255,0.6)` — circular icon-button fill, search fill |
| `white-500` | `rgba(255,255,255,0.5)` — secondary / meta text |
| `white-400` | `rgba(255,255,255,0.4)` — unfilled slider rail |
| `white-350` | `rgba(255,255,255,0.35)` — glass layer, input border |
| `white-250` | `rgba(255,255,255,0.25)` — glass card fill, borders |
| `white-200` | `rgba(255,255,255,0.2)` — glass surfaces, settings card, nav border |
| `white-150` | `rgba(255,255,255,0.15)` — faintest glass fill |

**Darkscale** — the dark counterpart (scrims, glass on light):

| Token | Value |
| --- | --- |
| `dark-900` | `#151515` |
| `dark-650` | `rgba(21,21,21,0.65)` — avatar "Change" pill overlay |
| `dark-500` | `rgba(21,21,21,0.5)` — search placeholder, muted overlays |
| `dark-250` | `rgba(21,21,21,0.25)` — inactive nav item, neutral tag, glass-on-light |

**Semantic aliases** (theme-aware) — prefer these in components:
`background`, `surface` / `surface-strong`, `glass`, `scrim`,
`content` / `content-muted` (text), `icon`, `stroke` / `stroke-strong` (border).

### Typography

Family: **Inter** (fallback `SF Pro Text/Display`, system-ui). All app text
uses a **100% line-height** (tight). SF Pro tokens appear only in native iOS
overlays (keyboard, wheel picker) and are treated as platform chrome.

| Utility class | Token | Weight / Size | Usage |
| --- | --- | --- | --- |
| `.type-heading-1` | heading-1 | 700 / 38 | Onboarding hero headline |
| `.type-heading-2` | heading-2-semibold | 600 / 32 | Screen title |
| `.type-heading-2-medium` | heading-2-medium | 500 / 32 | Large title, medium weight |
| `.type-heading-3` | heading-3-semibold | 600 / 24 | Section / step heading, card title |
| `.type-heading-3-bold` | heading-3-bold | 700 / 24 | Emphasized heading |
| `.type-body-lg` | body-large-semibold | 600 / 18 | Primary button label, top-bar title |
| `.type-body-bold` | body-base-bold | 700 / 16 | Field labels, list labels, track title |
| `.type-body-medium` | body-base-medium | 500 / 16 | Input value, chip label, search text |
| `.type-body` | body-base-regular | 400 / 16 | Body copy, captions |
| `.type-label` | body-medium | 600 / 13 | Meta-stat labels |
| `.type-caption` | body-small | 500 / 12 | Small labels, subtitles |
| `.type-micro` | micro | 400 / 10 | Slider time labels |

Raw font sizes are also available as Tailwind utilities (`text-heading-1` …
`text-micro`), each with `line-height: 1`.

### Spacing

Base px scale extracted from layout measurements:

`2 · 4 · 5 · 7 · 10 · 11 · 12 · 14 · 15 (gutter) · 16 · 18 · 20 · 23 · 24 · 28 · 32 · 39 · 40 · 45 · 52 · 64`

Screen margin is **16px**; the status bar occupies the top **34px**
(`nav-top-offset`) and the home indicator the bottom **15px**. Use Tailwind's
default spacing utilities plus arbitrary values (e.g. `px-[18px]`) for exact
Figma measurements.

### Radii

| Token | px | Use |
| --- | --- | --- |
| `rounded-xs` | 4.6 | Keyboard keys, tiny badges |
| `rounded-sm` | 12 | Icon tiles, small cards |
| `rounded-md` | 16 | List rows, activity cards |
| `rounded-card` | 20 | Album cards, thumbnails |
| `rounded-lg` | 24 | Panels |
| `rounded-xl` | 25 | Track rows |
| `rounded-glass` | 36 | Glass sheets |
| `rounded-circle` | 99 | Circular controls |
| `rounded-full` | 9999 | Pills — buttons, inputs, chips, nav |

**Corner language:** pills = full; cards = 16–25; glass sheets = 36; small
badges/keys = 4.6–14.

### Elevation & blur

| Token | Value |
| --- | --- |
| `shadow-key-dark` | `0 1px 0 0 rgba(0,0,0,1)` (hard iOS key shadow) |
| `shadow-fab` | `0 8px 24px 0 rgba(0,0,0,0.25)` |
| `backdrop-blur-sm` | 7.5px |
| `backdrop-blur-md` | 10px |
| `backdrop-blur-lg` | 17.5px |
| `backdrop-blur-xl` | 20px |

Frosted surfaces are available as `.glass` (20% / 20px), `.glass-soft`
(15% / 7.5px), and `.glass-strong` (25% / 17.5px).

### Iconography

Line/stroke icons (Hugeicons-style), monochrome white by default, with teal
or dark inversions on filled surfaces; stroke ~1.5–2px. Standard sizes:
**15** (inline stats), **16** (small chevrons), **20–24** (list / input),
**28** (card / transport), **32** (top-nav), **36** (bottom-nav), **46** (play
FAB). Icons center in circular/square targets of 24 / 40 / 58 / 70 / 90px. The
`src/components/icons` set is self-contained (no icon dependency).

---

## Token architecture

```
design-tokens.json      ← source of truth (mirrors Figma variables)
   │
   ├── tokens.css        ← :root CSS custom properties (--zt-* physical, --color-* semantic)
   │      └── data-theme="light" overrides the semantic layer
   │
   ├── tailwind.config.ts ← theme.extend maps Tailwind classes → CSS vars
   │
   └── tokens.ts         ← typed JS/TS accessors (colors, radius, typography …)
```

Because Tailwind classes resolve to CSS variables, the theme flips at runtime
with zero rebuild, and any raw CSS can consume the same `var(--…)` tokens.

---

## Component catalog

40+ components across seven layers. Every component is typed, forwards refs
where it wraps a single element, and styles exclusively from the token theme.

### Primitives

| Component | Summary | Key props |
| --- | --- | --- |
| `Button` | Pill CTA | `variant` primary/light/secondary, `size` md/lg, `label`, `leadingIcon`, `fullWidth`, `loading` |
| `IconButton` | Icon-only tap target | `icon`, `shape` circle/square, `fill` transparent/glass/solid-white, `size` 24/40/70, `ariaLabel` |
| `CircularIconButton` | Card/header circle (edit, play) | `variant` outlined/primary-filled, `icon`, `size` 49/58, `ariaLabel` |
| `FAB` | Floating action button | `variant` primary/light, `icon`, `size` 70/86, `ariaLabel` |
| `PlayPauseButton` | Emphasized transport button | `playing`, `size` |
| `Divider` | 1px rule | `tone` light/dark |
| `HomeIndicator` | iOS home handle | `theme` dark/light |

### Forms

| Component | Summary | Key props |
| --- | --- | --- |
| `TextField` | Filled input + label + helper/error | `label`, `value`, `onChangeText`, `type` text/email/password/select/date, `trailingIcon`, `error` |
| `SearchBar` | Pill search field | `value`, `onChangeText`, `theme` light/onImage, `onSubmit` |
| `Chip` | Genre filter / tag pill | `label`, `variant` filter/tag, `tone` accent/neutral/dark, `selected` |
| `ToggleSwitch` | On/off switch | `checked`, `onChange` |
| `Checkbox` | Multi-select box | `checked`, `onChange`, `label` |
| `SegmentedControl` | Single-select row | `options`, `value`, `onChange` |
| `RatingStars` | 5-star rating | `value`, `onChange`, `size`, `readOnly` |
| `ProgressSlider` | Playback / progress bar | `value`, `max`, `onSeek`, `elapsedLabel`, `totalLabel` |

### Media

| Component | Summary | Key props |
| --- | --- | --- |
| `Avatar` | Profile / result image | `src`, `size`, `shape`, `editable`, `onEdit` |
| `AvatarStack` | Overlapping avatar cluster | `avatars`, `overlap` |
| `Logo` | ZenTune wordmark + mark | `variant` full/mark, `width` |
| `IconBadge` | Glass icon badge/tile | `icon`, `shape`, `size` |
| `SelectionBadge` | Selected-state check badge | `visible`, `size` |
| `AlbumThumbnail` | Artwork + play/pause overlay | `src`, `overlay` play/pause/none, `size` |
| `StatTile` | Icon + stat label | `icon`, `label` |
| `AlbumCard` | Cover card + title + tags | `cover`, `title`, `episodeCount`, `tags`, `deckHeader` |
| `ArtistCard` | Selectable grid tile | `cover`, `title`, `subtitle`, `selected`, `onToggle` |

### Navigation

| Component | Summary | Key props |
| --- | --- | --- |
| `TopAppBar` | Screen header | `variant` detail/dashboard, `title`, `onBack`, `trailing` |
| `BottomNav` (`BottomNavBar` + `BottomNavItem`) | Floating frosted nav | `items`, `activeKey`, `onSelect`, `theme` |
| `ListRow` | Settings / menu row | `label`, `caption`, `leading`, `leadingType`, `trailing`, `size` |
| `PaginationDots` | Onboarding progress | `count`, `activeIndex` |

### Layout

| Component | Summary | Key props |
| --- | --- | --- |
| `SectionHeader` | Titled section / screen heading | `title`, `level` 2/3, `overline`, `subtitle`, `action` |
| `CardCarousel` | Horizontal scroll / grid | `layout` horizontal/grid, `gap`, `columns` |
| `GlassCard` | Frosted translucent surface | `opacity` 200/250/350, `blur`, `radius` |
| `Screen` | 375×812 device frame | `theme` dark/light |

### Feedback

| Component | Summary | Key props |
| --- | --- | --- |
| `Sheet` | Modal / glass bottom sheet | `open`, `onClose`, `variant` modal/glass-sheet, `dismissLabel` |
| `EmptyState` | No-results message | `headline`, `supportingText`, `preview` |
| `OnboardingText` | Centered supporting copy | `text`, `align`, `maxWidth` |

### Music (organisms)

| Component | Summary | Key props |
| --- | --- | --- |
| `TrackRow` | Frosted song row | `cover`, `title`, `artist`, `playing`, `favourited` |
| `MiniPlayer` | Compact now-playing bar | `track`, `playing`, `onPlayPause`, `onExpand` |
| `PlaylistHeader` | Playlist hero header | `overline`, `title`, `stats`, `onPlay` |
| `FullPlayer` | Now-playing glass sheet | `track`, `progress`, `duration`, `playing`, transport callbacks |
| `TransportControlBar` | Shuffle/prev/play/next/repeat | `playing`, `shuffleOn`, `repeatOn`, callbacks |
| `OutputDeviceRow` | Audio output row | `deviceName`, `icon` |
| `CollectionPanel` | Titled collection + carousel | `title`, `onEdit`, `onPlay` |
| `ActivityCard` | Accent CTA row | `label`, `icon` |
| `PlaylistDeckHeader` | Header over active playlist card | `label`, `onEdit`, `onPlay` |

> **Platform chrome (documented, not shipped):** the iOS software `Keyboard`,
> `WheelPicker`, `PickerToolbar`, and keyboard `SuggestionBar` appear in the
> Figma frames but are native iOS system UI, not part of the ZenTune app design
> system. The `SearchBar`, `SegmentedControl`, and `Sheet` components cover the
> app-level equivalents.
