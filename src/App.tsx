import * as React from 'react'
import {
  // primitives
  Button,
  IconButton,
  CircularIconButton,
  FAB,
  PlayPauseButton,
  Divider,
  HomeIndicator,
  // forms
  TextField,
  SearchBar,
  Chip,
  ToggleSwitch,
  Checkbox,
  SegmentedControl,
  RatingStars,
  ProgressSlider,
  // media
  Avatar,
  AvatarStack,
  Logo,
  IconBadge,
  SelectionBadge,
  AlbumThumbnail,
  StatTile,
  AlbumCard,
  ArtistCard,
  // navigation
  TopAppBar,
  BottomNavBar,
  ListRow,
  PaginationDots,
  // layout
  SectionHeader,
  CardCarousel,
  GlassCard,
  // feedback
  Sheet,
  EmptyState,
  OnboardingText,
  // music
  TrackRow,
  MiniPlayer,
  PlaylistHeader,
  FullPlayer,
  TransportControlBar,
  OutputDeviceRow,
  CollectionPanel,
  ActivityCard,
  PlaylistDeckHeader,
  // icons
  Play,
  Heart,
  Search,
  Settings,
  Bell,
  Lock,
  MusicNote,
  Pencil,
  Close,
  Home,
  Library,
  Mail,
  Bluetooth,
} from '@/components'
import { covers } from '@/lib/placeholder'
import LoginScreen from '@/screens/LoginScreen'
import HomeScreen from '@/screens/HomeScreen'
import PlayerScreen from '@/screens/PlayerScreen'
import SettingsScreen from '@/screens/SettingsScreen'

/* ------------------------------------------------------------------ layout */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="type-heading-2 text-content">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Panel({ title, wide, children }: { title: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-lg border border-white-150 bg-white-150 p-6 ${wide ? 'lg:col-span-3' : ''}`}
    >
      <h3 className="type-label text-content-muted uppercase tracking-wide">{title}</h3>
      <div className="mt-4 flex flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</div>
}

/* --------------------------------------------------------------- colours */

type Sw = [name: string, cls: string, value: string]

function Swatch({ name, cls, value }: { name: string; cls: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-14 w-full rounded-md ring-1 ring-white-150" style={{ background: '#7c7c7c' }}>
        <div className={`h-full w-full rounded-md ${cls}`} />
      </div>
      <span className="type-caption text-content">{name}</span>
      <span className="type-micro text-content-muted">{value}</span>
    </div>
  )
}

function ColorGroup({ title, items }: { title: string; items: Sw[] }) {
  return (
    <div>
      <h3 className="type-body-bold text-content mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {items.map(([n, c, v]) => (
          <Swatch key={n} name={n} cls={c} value={v} />
        ))}
      </div>
    </div>
  )
}

const BRAND: Sw[] = [
  ['primary', 'bg-primary', '#014f6e'],
  ['primary-700', 'bg-primary-700', 'rgba(1,79,110,.7)'],
  ['primary-150', 'bg-primary-150', 'rgba(1,79,110,.15)'],
  ['accent', 'bg-accent', '#85bdd6'],
  ['accent-700', 'bg-accent-700', 'rgba(133,189,214,.7)'],
  ['accent-150', 'bg-accent-150', 'rgba(133,189,214,.2)'],
  ['warning', 'bg-warning', '#e9a81c'],
]
const NEUTRAL: Sw[] = [
  ['ink', 'bg-ink', '#151515'],
  ['gray-700', 'bg-gray-700', '#717171'],
  ['gray-500', 'bg-gray-500', '#c9c9c9'],
  ['white-900', 'bg-white-900', '#ffffff'],
]
const WHITESCALE: Sw[] = [
  ['white-600', 'bg-white-600', 'rgba(255,255,255,.6)'],
  ['white-500', 'bg-white-500', 'rgba(255,255,255,.5)'],
  ['white-400', 'bg-white-400', 'rgba(255,255,255,.4)'],
  ['white-350', 'bg-white-350', 'rgba(255,255,255,.35)'],
  ['white-250', 'bg-white-250', 'rgba(255,255,255,.25)'],
  ['white-200', 'bg-white-200', 'rgba(255,255,255,.2)'],
  ['white-150', 'bg-white-150', 'rgba(255,255,255,.15)'],
]
const DARKSCALE: Sw[] = [
  ['dark-900', 'bg-dark-900', '#151515'],
  ['dark-650', 'bg-dark-650', 'rgba(21,21,21,.65)'],
  ['dark-500', 'bg-dark-500', 'rgba(21,21,21,.5)'],
  ['dark-250', 'bg-dark-250', 'rgba(21,21,21,.25)'],
]
const SEMANTIC: Sw[] = [
  ['background', 'bg-background', 'theme-aware'],
  ['surface', 'bg-surface', 'theme-aware'],
  ['surface-strong', 'bg-surface-strong', 'theme-aware'],
  ['glass', 'bg-glass', 'theme-aware'],
  ['scrim', 'bg-scrim', 'theme-aware'],
  ['stroke', 'bg-stroke', 'theme-aware'],
  ['stroke-strong', 'bg-stroke-strong', 'theme-aware'],
]

const TEXT_COLORS: { cls: string; label: string; value: string }[] = [
  { cls: 'text-content', label: 'text-content', value: 'theme text — #ffffff / #151515' },
  { cls: 'text-content-muted', label: 'text-content-muted', value: 'muted — white-500 / dark-500' },
  { cls: 'text-primary', label: 'text-primary', value: '#014f6e' },
  { cls: 'text-accent', label: 'text-accent', value: '#85bdd6' },
  { cls: 'text-warning', label: 'text-warning', value: '#e9a81c' },
  { cls: 'text-white-900', label: 'text-white-900', value: '#ffffff' },
  { cls: 'text-white-500', label: 'text-white-500', value: 'rgba(255,255,255,.5)' },
  { cls: 'text-gray-500', label: 'text-gray-500', value: '#c9c9c9' },
]

function TextColors() {
  return (
    <div>
      <h3 className="type-body-bold text-content mb-3">Text colours</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {TEXT_COLORS.map((t) => (
          <div key={t.label} className="flex items-baseline justify-between gap-4 rounded-md border border-white-150 px-4 py-3">
            <span className={`type-body-bold ${t.cls}`}>The quick brown fox</span>
            <span className="shrink-0 text-right">
              <span className="block type-caption text-content">{t.label}</span>
              <span className="block type-micro text-content-muted">{t.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ typography */

const TYPE: { cls: string; token: string; spec: string }[] = [
  { cls: 'type-heading-1', token: 'heading-1', spec: 'Inter 700 · 38' },
  { cls: 'type-heading-2', token: 'heading-2', spec: 'Inter 600 · 32' },
  { cls: 'type-heading-3', token: 'heading-3', spec: 'Inter 600 · 24' },
  { cls: 'type-body-lg', token: 'body-large', spec: 'Inter 600 · 18' },
  { cls: 'type-body-bold', token: 'body-bold', spec: 'Inter 700 · 16' },
  { cls: 'type-body', token: 'body', spec: 'Inter 400 · 16' },
  { cls: 'type-label', token: 'label', spec: 'Inter 600 · 13' },
  { cls: 'type-caption', token: 'caption', spec: 'Inter 500 · 12' },
  { cls: 'type-micro', token: 'micro', spec: 'Inter 400 · 10' },
]

function Typography() {
  return (
    <div className="rounded-lg border border-white-150 bg-white-150 p-6">
      {TYPE.map((r) => (
        <div key={r.token} className="flex items-baseline justify-between gap-6 border-b border-stroke py-3 last:border-0">
          <span className={`${r.cls} text-content`}>FEBC Podcast</span>
          <span className="shrink-0 text-right">
            <span className="block type-caption text-content">{r.token}</span>
            <span className="block type-micro text-content-muted">{r.spec}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------- interactive demos */

function PlayPauseDemo() {
  const [p, setP] = React.useState(false)
  return <PlayPauseButton playing={p} onClick={() => setP((v) => !v)} />
}
function TextFieldDemo() {
  const [a, setA] = React.useState('')
  const [b, setB] = React.useState('')
  const [c] = React.useState('')
  return (
    <div className="flex w-full flex-col gap-4">
      <TextField label="Email" type="email" value={a} onChangeText={setA} placeholder="you@febc.org" trailingIcon={<Mail size={24} />} />
      <TextField label="Password" type="password" value={b} onChangeText={setB} placeholder="••••••••" />
      <TextField label="Country" type="select" value={c} onChangeText={() => {}} placeholder="Choose one" />
      <TextField label="Username" value="taken" onChangeText={() => {}} error="That username is taken" />
    </div>
  )
}
function ToggleDemo() {
  const [on, setOn] = React.useState(true)
  return <ToggleSwitch checked={on} onChange={setOn} ariaLabel="demo" />
}
function CheckboxDemo() {
  const [on, setOn] = React.useState(true)
  return <Checkbox checked={on} onChange={setOn} label="Add to library" />
}
function SegmentedDemo() {
  const [v, setV] = React.useState('week')
  return (
    <SegmentedControl
      value={v}
      onChange={setV}
      options={[
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
      ]}
    />
  )
}
function RatingDemo() {
  const [v, setV] = React.useState(4)
  return <RatingStars value={v} onChange={setV} />
}
function SliderDemo() {
  const [v, setV] = React.useState(70)
  return <ProgressSlider value={v} max={214} onSeek={setV} elapsedLabel="1:22" totalLabel="3:34" />
}
function BottomNavDemo() {
  const [k, setK] = React.useState('home')
  return (
    <BottomNavBar
      activeKey={k}
      onSelect={setK}
      items={[
        { key: 'home', icon: <Home />, ariaLabel: 'Home' },
        { key: 'library', icon: <Library />, ariaLabel: 'Library' },
        { key: 'search', icon: <Search />, ariaLabel: 'Search' },
      ]}
    />
  )
}
function TrackRowDemo() {
  const [p, setP] = React.useState(true)
  const [f, setF] = React.useState(true)
  return (
    <div className="w-full">
      <TrackRow cover={covers.stay} title="Stay" artist="Juice WRLD" playing={p} favourited={f} onPlayPause={() => setP((v) => !v)} onFavourite={() => setF((v) => !v)} />
    </div>
  )
}
function MiniPlayerDemo() {
  const [p, setP] = React.useState(false)
  return (
    <div className="w-full">
      <MiniPlayer track={{ title: 'Midnight Drive', artist: 'The Synths', cover: covers.midnight }} playing={p} onPlayPause={() => setP((v) => !v)} onExpand={() => {}} />
    </div>
  )
}
function TransportDemo() {
  const [p, setP] = React.useState(true)
  return (
    <div className="w-[300px]">
      <TransportControlBar playing={p} onPlayPause={() => setP((v) => !v)} onNext={() => {}} onPrev={() => {}} onShuffle={() => {}} onRepeat={() => {}} />
    </div>
  )
}
function FullPlayerDemo() {
  const [p, setP] = React.useState(true)
  const [pr, setPr] = React.useState(82)
  return (
    <FullPlayer
      track={{ title: 'Stay', artist: 'Juice WRLD' }}
      progress={pr}
      duration={214}
      playing={p}
      outputDevice="AirPods Pro"
      onPlayPause={() => setP((v) => !v)}
      onSeek={setPr}
      onNext={() => {}}
      onPrev={() => {}}
      onClose={() => {}}
    />
  )
}
function SheetDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <Button variant="secondary" size="md" label="Open sheet" onClick={() => setOpen(true)} />
      <Sheet open={open} onClose={() => setOpen(false)} variant="modal" dismissLabel="Cancel">
        <h3 className="type-heading-3 text-content">Delete playlist?</h3>
        <p className="type-body text-content-muted mt-2">This action can’t be undone.</p>
        <Button variant="primary" size="md" label="Delete" fullWidth className="mt-6" onClick={() => setOpen(false)} />
      </Sheet>
    </>
  )
}
function ArtistCardDemo() {
  const [sel, setSel] = React.useState(true)
  return <ArtistCard cover={covers.bloom} title="Taylor Swift" subtitle="75 ep." selected={sel} onToggle={() => setSel((v) => !v)} />
}

/* ------------------------------------------------------------- gallery */

function Gallery() {
  return (
    <div className="flex flex-col gap-14">
      <Section id="primitives" title="Primitives">
        <Grid>
          <Panel title="Button">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" label="Primary" />
                <Button variant="light" label="Log Out" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" label="Secondary" />
                <Button variant="primary" size="md" label="Compact" />
              </div>
              <Button variant="primary" label="Loading" loading />
            </div>
          </Panel>
          <Panel title="IconButton / Circular / FAB">
            <IconButton icon={<Search />} ariaLabel="s" fill="transparent" size={40} />
            <IconButton icon={<Heart />} ariaLabel="h" fill="glass" size={40} />
            <IconButton icon={<Settings />} ariaLabel="g" fill="solid-white" size={40} />
            <CircularIconButton variant="outlined" icon={<Pencil />} ariaLabel="e" />
            <CircularIconButton variant="primary-filled" icon={<Play />} ariaLabel="p" />
            <FAB variant="primary" icon={<Play />} ariaLabel="play" />
            <FAB variant="light" icon={<Close />} ariaLabel="close" />
          </Panel>
          <Panel title="PlayPause · Divider · HomeIndicator">
            <PlayPauseDemo />
            <div className="w-full">
              <Divider tone="light" />
              <div className="h-3" />
              <HomeIndicator theme="dark" />
            </div>
          </Panel>
        </Grid>
      </Section>

      <Section id="forms" title="Forms">
        <Grid>
          <Panel title="TextField">
            <TextFieldDemo />
          </Panel>
          <Panel title="SearchBar">
            <div className="flex w-full flex-col gap-3">
              <SearchBar value="" onChangeText={() => {}} placeholder="On image" theme="onImage" />
              <div data-theme="light" className="rounded-full">
                <SearchBar value="" onChangeText={() => {}} placeholder="Light" theme="light" />
              </div>
            </div>
          </Panel>
          <Panel title="Chip">
            <Chip label="Selected" selected />
            <Chip label="Filter" />
            <Chip label="Pop" variant="tag" tone="accent" />
            <Chip label="Top Hits" variant="tag" tone="neutral" />
          </Panel>
          <Panel title="Toggle · Checkbox">
            <ToggleDemo />
            <CheckboxDemo />
          </Panel>
          <Panel title="SegmentedControl">
            <SegmentedDemo />
          </Panel>
          <Panel title="RatingStars">
            <RatingDemo />
          </Panel>
          <Panel title="ProgressSlider" wide>
            <div className="w-full max-w-md">
              <SliderDemo />
            </div>
          </Panel>
        </Grid>
      </Section>

      <Section id="media" title="Media">
        <Grid>
          <Panel title="Avatar · AvatarStack">
            <Avatar src={covers.midnight} alt="a" size={64} />
            <Avatar src={covers.bloom} alt="a" size={64} shape="square" />
            <Avatar src={covers.neon} alt="a" size={64} editable onEdit={() => {}} />
            <AvatarStack
              avatars={[
                { src: covers.stay },
                { src: covers.midnight },
                { src: covers.goldenHour, shape: 'square' },
                { src: covers.bloom },
              ]}
            />
          </Panel>
          <Panel title="Logo">
            <Logo variant="full" />
            <Logo variant="mark" />
          </Panel>
          <Panel title="Badges · Thumbnail · Stat">
            <IconBadge icon={<MusicNote />} shape="circle" />
            <IconBadge icon={<Heart />} shape="rounded-square" />
            <div className="relative size-14">
              <AlbumThumbnail src={covers.stay} size={56} overlay="play" />
              <SelectionBadge visible className="absolute -bottom-1 -right-1" />
            </div>
            <AlbumThumbnail src={covers.neon} size={56} overlay="pause" />
            <StatTile icon={<Heart />} label="12.4k" />
            <StatTile icon={<MusicNote />} label="48 tracks" />
          </Panel>
          <Panel title="AlbumCard">
            <div className="w-[240px]">
              <AlbumCard cover={covers.goldenHour} title="Golden Hour" episodeCount="12 episodes" tags={[{ label: 'Pop', tone: 'accent' }, { label: 'Chill' }]} className="w-[240px] h-[224px]" />
            </div>
          </Panel>
          <Panel title="ArtistCard">
            <ArtistCardDemo />
          </Panel>
        </Grid>
      </Section>

      <Section id="navigation" title="Navigation & layout">
        <Grid>
          <Panel title="TopAppBar" wide>
            <div className="flex w-full flex-col gap-3">
              <div className="w-[375px] max-w-full rounded-xl bg-white-150">
                <TopAppBar title="Log in" onBack={() => {}} trailing={<IconButton icon={<Settings />} ariaLabel="s" size={40} />} transparent />
              </div>
              <div className="w-[375px] max-w-full rounded-xl bg-white-150">
                <TopAppBar variant="dashboard" title="Your Studio" trailing={<IconButton icon={<Search />} ariaLabel="s" fill="glass" size={40} />} transparent />
              </div>
            </div>
          </Panel>
          <Panel title="BottomNav">
            <BottomNavDemo />
          </Panel>
          <Panel title="ListRow" wide>
            <div className="flex w-full flex-col gap-3">
              <ListRow leading={<Bell size={22} />} label="Notifications" trailing={<ToggleDemo />} />
              <ListRow leading={<Lock size={22} />} label="Password" onPress={() => {}} />
              <ListRow size="tall" leadingType="avatar" leading={<img src={covers.bloom} alt="" className="size-full object-cover" />} label="Amelia Park" caption="View profile" />
            </div>
          </Panel>
          <Panel title="SectionHeader · PaginationDots">
            <div className="flex w-full flex-col gap-4">
              <SectionHeader title="Your Library" level={2} action={{ label: 'See all', onPress: () => {} }} />
              <SectionHeader title="Recently played" overline="TODAY" subtitle="Picked for you" />
              <PaginationDots count={4} activeIndex={1} />
            </div>
          </Panel>
          <Panel title="CardCarousel">
            <CardCarousel gap={12} className="w-full">
              <div className="size-24 shrink-0 rounded-md bg-primary" />
              <div className="size-24 shrink-0 rounded-md bg-accent" />
              <div className="size-24 shrink-0 rounded-md bg-white-250" />
              <div className="size-24 shrink-0 rounded-md bg-warning" />
            </CardCarousel>
          </Panel>
          <Panel title="GlassCard">
            <GlassCard opacity="200" className="p-4 w-40">
              <span className="type-body-bold text-content">Glass 200</span>
            </GlassCard>
            <GlassCard opacity="350" className="p-4 w-40">
              <span className="type-body-bold text-content">Glass 350</span>
            </GlassCard>
          </Panel>
        </Grid>
      </Section>

      <Section id="feedback" title="Feedback">
        <Grid>
          <Panel title="Sheet">
            <SheetDemo />
          </Panel>
          <Panel title="EmptyState">
            <EmptyState headline="No results for “lofi”" supportingText="Try a different search term." />
          </Panel>
          <Panel title="OnboardingText">
            <OnboardingText text="Millions of songs, podcasts and stories — free, on FEBC." />
          </Panel>
        </Grid>
      </Section>

      <Section id="music" title="Music">
        <Grid>
          <Panel title="TrackRow" wide>
            <TrackRowDemo />
          </Panel>
          <Panel title="MiniPlayer" wide>
            <MiniPlayerDemo />
          </Panel>
          <Panel title="PlaylistHeader" wide>
            <div className="w-full max-w-md pt-2">
              <PlaylistHeader overline="PLAYLIST" title="Deep Focus" stats={[{ icon: <Heart />, label: '12.4k' }, { icon: <MusicNote />, label: '48 min' }]} onPlay={() => {}} />
            </div>
          </Panel>
          <Panel title="TransportControlBar">
            <TransportDemo />
          </Panel>
          <Panel title="OutputDeviceRow">
            <OutputDeviceRow deviceName="AirPods Pro" icon={<Bluetooth size={24} />} />
          </Panel>
          <Panel title="PlaylistDeckHeader">
            <div className="w-[280px]">
              <PlaylistDeckHeader label="Top Hits" onEdit={() => {}} onPlay={() => {}} />
            </div>
          </Panel>
          <Panel title="ActivityCard" wide>
            <div className="w-full max-w-md">
              <ActivityCard label="Liked Songs" icon={<Heart />} onPress={() => {}} />
            </div>
          </Panel>
          <Panel title="CollectionPanel" wide>
            <div className="w-full max-w-md">
              <CollectionPanel title="Your Studio Sessions" onEdit={() => {}} onPlay={() => {}}>
                <div className="flex gap-3">
                  <div className="h-24 w-32 shrink-0 rounded-md bg-primary" />
                  <div className="h-24 w-32 shrink-0 rounded-md bg-accent" />
                </div>
              </CollectionPanel>
            </div>
          </Panel>
          <Panel title="FullPlayer" wide>
            <div className="flex w-full justify-center py-6">
              <FullPlayerDemo />
            </div>
          </Panel>
        </Grid>
      </Section>

      <Section id="screens" title="Screens">
        <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">
          {[
            ['Log in', <LoginScreen key="l" />],
            ['Your Studio', <HomeScreen key="h" />],
            ['Player', <PlayerScreen key="p" />],
            ['Settings', <SettingsScreen key="s" />],
          ].map(([label, node]) => (
            <figure key={label as string} className="m-0 flex shrink-0 flex-col items-center gap-3">
              <figcaption className="type-caption text-content-muted">{label as string}</figcaption>
              <div className="overflow-hidden rounded-[44px] ring-1 ring-white-200 shadow-fab">{node as React.ReactNode}</div>
            </figure>
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ---------------------------------------------------------------- app */

export default function App() {
  return (
    <div className="min-h-full bg-background text-content">
      <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-12 pb-8">
        <Logo />
        <div>
          <h1 className="type-heading-1 text-content">FEBC Podcast Design System</h1>
          <p className="mt-3 max-w-2xl type-body text-content-muted">
            A React + TypeScript + Tailwind design system for FEBC Christian Media — built from a
            Figma UI kit and themed to the FEBC palette. Foundations, every component, and the
            screens they compose.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <Section id="colors" title="Colours">
          <div className="flex flex-col gap-8 rounded-lg border border-white-150 bg-white-150 p-6">
            <ColorGroup title="Brand" items={BRAND} />
            <ColorGroup title="Neutrals" items={NEUTRAL} />
            <ColorGroup title="Whitescale (translucent white)" items={WHITESCALE} />
            <ColorGroup title="Darkscale (translucent dark)" items={DARKSCALE} />
            <ColorGroup title="Semantic (theme-aware)" items={SEMANTIC} />
            <TextColors />
          </div>
        </Section>

        <Section id="type" title="Typography">
          <Typography />
        </Section>

        <Gallery />
      </main>
    </div>
  )
}
