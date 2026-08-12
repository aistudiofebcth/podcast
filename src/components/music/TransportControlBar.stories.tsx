import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { TransportControlBar } from './TransportControlBar'

const meta = {
  title: 'Music/TransportControlBar',
  component: TransportControlBar,
  tags: ['autodocs'],
  args: {
    shuffleOn: false,
    repeatOn: false,
    playing: false,
    onPlayPause: () => {},
    onNext: () => {},
    onPrev: () => {},
  },
  argTypes: {
    shuffleOn: { control: 'boolean' },
    repeatOn: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TransportControlBar>

export default meta
type Story = StoryObj<typeof meta>

export const Paused: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(false)
    return (
      <TransportControlBar
        {...args}
        playing={playing}
        onPlayPause={() => setPlaying((p) => !p)}
        onNext={() => {}}
        onPrev={() => {}}
        onShuffle={() => {}}
        onRepeat={() => {}}
      />
    )
  },
}

export const Playing: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(true)
    return (
      <TransportControlBar
        {...args}
        playing={playing}
        onPlayPause={() => setPlaying((p) => !p)}
        onNext={() => {}}
        onPrev={() => {}}
        onShuffle={() => {}}
        onRepeat={() => {}}
      />
    )
  },
}

export const TogglesActive: Story = {
  args: { shuffleOn: true, repeatOn: true },
  render: (args) => {
    const [playing, setPlaying] = React.useState(false)
    return (
      <TransportControlBar
        {...args}
        playing={playing}
        onPlayPause={() => setPlaying((p) => !p)}
        onNext={() => {}}
        onPrev={() => {}}
        onShuffle={() => {}}
        onRepeat={() => {}}
      />
    )
  },
}
