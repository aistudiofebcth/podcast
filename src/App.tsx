import * as React from 'react'
import {
  Logo,
  Button,
  Chip,
  RatingStars,
  ToggleSwitch,
  ProgressSlider,
  SegmentedControl,
  PaginationDots,
  TrackRow,
  MiniPlayer,
  StatTile,
  Heart,
  MusicNote,
} from '@/components'
import { covers } from '@/lib/placeholder'
import LoginScreen from '@/screens/LoginScreen'
import HomeScreen from '@/screens/HomeScreen'
import PlayerScreen from '@/screens/PlayerScreen'
import SettingsScreen from '@/screens/SettingsScreen'

function DeviceFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="m-0 flex shrink-0 flex-col items-center gap-3">
      <figcaption className="type-caption text-content-muted">{label}</figcaption>
      <div className="overflow-hidden rounded-[44px] ring-1 ring-white-200 shadow-fab">
        {children}
      </div>
    </figure>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-white-150 bg-white-150 p-6">
      <h3 className="type-heading-3 text-content">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function ComponentGallery() {
  const [rating, setRating] = React.useState(4)
  const [notify, setNotify] = React.useState(true)
  const [progress, setProgress] = React.useState(70)
  const [seg, setSeg] = React.useState('week')
  const [playing, setPlaying] = React.useState(false)
  const [fav, setFav] = React.useState(true)

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Panel title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" label="Primary" />
          <Button variant="light" label="Log Out" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="primary" size="md" label="Compact" />
          <Button variant="primary" label="Loading" loading />
        </div>
      </Panel>

      <Panel title="Chips">
        <div className="flex flex-wrap items-center gap-[7px]">
          <Chip label="Selected" selected />
          <Chip label="Filter" />
          <Chip label="Pop" variant="tag" tone="accent" />
          <Chip label="Top Hits" variant="tag" tone="neutral" />
        </div>
      </Panel>

      <Panel title="Rating & toggle">
        <div className="flex items-center justify-between gap-6">
          <RatingStars value={rating} onChange={setRating} />
          <ToggleSwitch checked={notify} onChange={setNotify} ariaLabel="Notifications" />
        </div>
      </Panel>

      <Panel title="Segmented control">
        <SegmentedControl
          value={seg}
          onChange={setSeg}
          options={[
            { label: 'Day', value: 'day' },
            { label: 'Week', value: 'week' },
            { label: 'Month', value: 'month' },
          ]}
        />
      </Panel>

      <Panel title="Progress slider">
        <ProgressSlider
          value={progress}
          max={214}
          onSeek={setProgress}
          elapsedLabel="1:22"
          totalLabel="3:34"
        />
      </Panel>

      <Panel title="Stats & pagination">
        <div className="flex items-center gap-8">
          <StatTile icon={<Heart />} label="12.4k likes" />
          <StatTile icon={<MusicNote />} label="48 tracks" />
          <PaginationDots count={4} activeIndex={1} />
        </div>
      </Panel>

      <div className="lg:col-span-2">
        <Panel title="Track row & mini player">
          <div className="flex flex-col gap-4">
            <TrackRow
              cover={covers.stay}
              title="Stay"
              artist="Juice WRLD"
              playing={playing}
              favourited={fav}
              onPlayPause={() => setPlaying((p) => !p)}
              onFavourite={() => setFav((f) => !f)}
            />
            <MiniPlayer
              track={{ title: 'Midnight Drive', artist: 'The Synths', cover: covers.midnight }}
              playing={playing}
              onPlayPause={() => setPlaying((p) => !p)}
              onExpand={() => {}}
            />
          </div>
        </Panel>
      </div>
    </div>
  )
}

/** The ZenTune design-system showcase: brand foundations, live screens, and a component gallery. */
export default function App() {
  return (
    <div className="min-h-full bg-background text-content">
      <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12">
        <Logo />
        <div>
          <h1 className="type-heading-1 text-content">ZenTune Design System</h1>
          <p className="mt-3 max-w-2xl type-body text-content-muted">
            A React + TypeScript + Tailwind design system generated from the ZenTune
            Figma UI kit — tokens, {`~40`} components, and the screens they compose.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <section>
          <h2 className="type-heading-2 text-content">Screens</h2>
          <div className="mt-6 flex gap-8 overflow-x-auto pb-4 no-scrollbar">
            <DeviceFrame label="Log in">
              <LoginScreen />
            </DeviceFrame>
            <DeviceFrame label="Your Studio">
              <HomeScreen />
            </DeviceFrame>
            <DeviceFrame label="Player">
              <PlayerScreen />
            </DeviceFrame>
            <DeviceFrame label="Settings">
              <SettingsScreen />
            </DeviceFrame>
          </div>
        </section>

        <section>
          <h2 className="type-heading-2 text-content">Components</h2>
          <div className="mt-6">
            <ComponentGallery />
          </div>
        </section>
      </main>
    </div>
  )
}
