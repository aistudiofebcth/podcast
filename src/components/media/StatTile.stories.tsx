import type { Meta, StoryObj } from '@storybook/react'
import { StatTile } from './StatTile'
import { Heart, Play } from '@/components/icons'

const meta = {
  title: 'Media/StatTile',
  component: StatTile,
  tags: ['autodocs'],
  args: { icon: <Heart />, label: '12.4k likes' },
} satisfies Meta<typeof StatTile>

export default meta
type Story = StoryObj<typeof meta>

export const Likes: Story = {}
export const Plays: Story = { args: { icon: <Play />, label: '1,204,882' } }
