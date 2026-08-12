import type { Meta, StoryObj } from '@storybook/react'
import { PlaylistHeader } from './PlaylistHeader'
import { Heart, MusicNote } from '@/components/icons'

const meta = {
  title: 'Music/PlaylistHeader',
  component: PlaylistHeader,
  tags: ['autodocs'],
  args: {
    overline: 'Playlist',
    title: 'Deep Focus',
    stats: [
      { icon: <Heart />, label: '12.4k' },
      { icon: <MusicNote />, label: '48 min' },
    ],
    onPlay: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343, background: '#0b0b10', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlaylistHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const NoOverline: Story = { args: { overline: undefined } }
export const NoStats: Story = { args: { stats: [] } }
