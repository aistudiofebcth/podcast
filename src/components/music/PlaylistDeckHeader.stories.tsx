import type { Meta, StoryObj } from '@storybook/react'
import { PlaylistDeckHeader } from './PlaylistDeckHeader'

const meta = {
  title: 'Music/PlaylistDeckHeader',
  component: PlaylistDeckHeader,
  tags: ['autodocs'],
  args: {
    label: 'Evening Chill',
    onEdit: () => {},
    onPlay: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300, background: '#0b0b10', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlaylistDeckHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const LongLabel: Story = { args: { label: 'Late Night Study' } }
