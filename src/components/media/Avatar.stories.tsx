import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: covers.midnight,
    alt: 'Profile photo',
  },
  argTypes: {
    shape: { control: 'inline-radio', options: ['circle', 'square'] },
    size: { control: 'number' },
    editable: { control: 'boolean' },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {}
export const Square: Story = { args: { shape: 'square' } }
export const Editable: Story = { args: { editable: true, onEdit: () => {} } }
