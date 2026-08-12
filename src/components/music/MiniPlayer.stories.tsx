import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { MiniPlayer } from './MiniPlayer'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Music/MiniPlayer',
  component: MiniPlayer,
  tags: ['autodocs'],
  args: {
    track: { title: 'Midnight City', artist: 'M83', cover: covers.midnight },
    playing: false,
    onPlayPause: () => {},
    onExpand: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MiniPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Playable: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(args.playing)
    return <MiniPlayer {...args} playing={playing} onPlayPause={() => setPlaying((p) => !p)} />
  },
}

export const Playing: Story = {
  ...Playable,
  args: { playing: true },
}
