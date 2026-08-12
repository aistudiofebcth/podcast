import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { PlayPauseButton } from './PlayPauseButton'

const meta = {
  title: 'Primitives/PlayPauseButton',
  component: PlayPauseButton,
  tags: ['autodocs'],
  args: {
    playing: false,
    size: 52,
  },
} satisfies Meta<typeof PlayPauseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(args.playing)
    return <PlayPauseButton {...args} playing={playing} onClick={() => setPlaying((p) => !p)} />
  },
}

export const Playing: Story = {
  render: (args) => {
    const [playing, setPlaying] = React.useState(true)
    return <PlayPauseButton {...args} playing={playing} onClick={() => setPlaying((p) => !p)} />
  },
}

export const Large: Story = {
  args: { size: 72 },
  render: (args) => {
    const [playing, setPlaying] = React.useState(args.playing)
    return <PlayPauseButton {...args} playing={playing} onClick={() => setPlaying((p) => !p)} />
  },
}
