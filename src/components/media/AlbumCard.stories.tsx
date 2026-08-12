import type { Meta, StoryObj } from '@storybook/react'
import { AlbumCard } from './AlbumCard'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/AlbumCard',
  component: AlbumCard,
  tags: ['autodocs'],
  args: {
    cover: covers.stay,
    title: 'Late Night Talks',
    episodeCount: '12 Episodes',
    tags: [
      { label: 'Pop', tone: 'accent' },
      { label: 'Chill' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AlbumCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoEpisodeCount: Story = { args: { episodeCount: undefined } }

export const NoTags: Story = { args: { tags: [] } }

export const Pressable: Story = { args: { onPress: () => {} } }
