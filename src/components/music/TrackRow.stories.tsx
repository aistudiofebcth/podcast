import type { Meta, StoryObj } from '@storybook/react'
import { TrackRow } from './TrackRow'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Music/TrackRow',
  component: TrackRow,
  tags: ['autodocs'],
  args: {
    cover: covers.stay,
    title: 'Stay',
    artist: 'Juice WRLD',
    playing: false,
    favourited: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TrackRow>

export default meta
type Story = StoryObj<typeof meta>

export const Paused: Story = {}
export const Playing: Story = { args: { playing: true } }
export const NotFavourited: Story = { args: { favourited: false } }
