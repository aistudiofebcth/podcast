import type { Meta, StoryObj } from '@storybook/react'
import { AvatarStack } from './AvatarStack'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/AvatarStack',
  component: AvatarStack,
  tags: ['autodocs'],
  args: {
    avatars: [
      { src: covers.stay },
      { src: covers.midnight },
      { src: covers.goldenHour },
      { src: covers.bloom },
    ],
  },
  argTypes: {
    overlap: { control: 'number' },
  },
} satisfies Meta<typeof AvatarStack>

export default meta
type Story = StoryObj<typeof meta>

export const Circles: Story = {}

export const Squares: Story = {
  args: {
    avatars: [
      { src: covers.neon, shape: 'square' },
      { src: covers.ember, shape: 'square' },
      { src: covers.bloom, shape: 'square' },
    ],
  },
}

export const Mixed: Story = {
  args: {
    avatars: [
      { src: covers.stay },
      { src: covers.midnight, shape: 'square' },
      { src: covers.goldenHour },
      { src: covers.neon, shape: 'square' },
    ],
  },
}
