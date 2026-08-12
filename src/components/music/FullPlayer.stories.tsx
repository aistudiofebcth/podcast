import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { FullPlayer } from './FullPlayer'

const meta = {
  title: 'Music/FullPlayer',
  component: FullPlayer,
  tags: ['autodocs'],
  args: {
    track: { title: 'Stay', artist: 'Juice WRLD' },
    duration: 214,
    outputDevice: 'AirPods Pro',
    progress: 72,
    playing: true,
    onPlayPause: () => {},
    onNext: () => {},
    onPrev: () => {},
    onClose: () => {},
  },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 340, padding: 32, background: '#0b0b12', borderRadius: 24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FullPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Playing: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(true)
    const [progress, setProgress] = React.useState(72)
    return (
      <FullPlayer
        {...args}
        playing={playing}
        progress={progress}
        onPlayPause={() => setPlaying((p) => !p)}
        onSeek={(v) => setProgress(v)}
        onNext={() => {}}
        onPrev={() => {}}
        onShuffle={() => {}}
        onRepeat={() => {}}
        onClose={() => {}}
      />
    )
  },
}

export const Paused: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(false)
    const [progress, setProgress] = React.useState(20)
    return (
      <FullPlayer
        {...args}
        playing={playing}
        progress={progress}
        onPlayPause={() => setPlaying((p) => !p)}
        onSeek={(v) => setProgress(v)}
        onNext={() => {}}
        onPrev={() => {}}
        onShuffle={() => {}}
        onRepeat={() => {}}
        onClose={() => {}}
      />
    )
  },
}
