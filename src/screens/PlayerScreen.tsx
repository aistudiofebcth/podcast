import * as React from 'react'
import {
  Screen,
  TopAppBar,
  IconButton,
  FullPlayer,
  HomeIndicator,
  ChevronLeft,
  MoreHorizontal,
} from '@/components'
import { covers } from '@/lib/placeholder'

const DURATION = 214 // seconds

/** Player — full-bleed artwork with a frosted now-playing sheet (on-image theme). */
export function PlayerScreen() {
  const [playing, setPlaying] = React.useState(true)
  const [progress, setProgress] = React.useState(82)

  return (
    <Screen theme="dark" className="relative flex flex-col">
      {/* Full-bleed cover artwork + scrim */}
      <img src={covers.neon} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/20 to-dark-900/95" />

      <div className="relative flex flex-1 flex-col">
        <TopAppBar
          transparent
          title="Now Playing"
          leading={<IconButton icon={<ChevronLeft />} ariaLabel="Back" size={40} />}
          trailing={<IconButton icon={<MoreHorizontal />} ariaLabel="More" size={40} />}
        />

        <div className="flex flex-1 flex-col items-center justify-end px-4 pb-16">
          <FullPlayer
            track={{ title: 'Stay', artist: 'Juice WRLD' }}
            progress={progress}
            duration={DURATION}
            playing={playing}
            outputDevice="AirPods Pro"
            onPlayPause={() => setPlaying((p) => !p)}
            onNext={() => setProgress(0)}
            onPrev={() => setProgress(0)}
            onSeek={(v) => setProgress(v)}
            onClose={() => {}}
          />
        </div>
      </div>

      <HomeIndicator theme="dark" className="relative mb-1" />
    </Screen>
  )
}

export default PlayerScreen
