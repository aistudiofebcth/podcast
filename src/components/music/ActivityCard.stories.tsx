import type { Meta, StoryObj } from '@storybook/react'
import { ActivityCard } from './ActivityCard'
import { Heart, MusicNote } from '@/components/icons'

const meta = {
  title: 'Music/ActivityCard',
  component: ActivityCard,
  tags: ['autodocs'],
  args: {
    label: 'Liked Songs',
    icon: <Heart />,
    onPress: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ActivityCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const MadeForYou: Story = { args: { label: 'Made For You', icon: <MusicNote /> } }
