import type { Meta, StoryObj } from '@storybook/react'
import { IconBadge } from './IconBadge'
import { MusicNote } from '@/components/icons'

const meta = {
  title: 'Media/IconBadge',
  component: IconBadge,
  tags: ['autodocs'],
  args: { icon: <MusicNote />, shape: 'circle', size: 40 },
  argTypes: {
    shape: { control: 'inline-radio', options: ['circle', 'rounded-square'] },
    size: { control: { type: 'range', min: 24, max: 72, step: 4 } },
  },
} satisfies Meta<typeof IconBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {}
export const RoundedSquare: Story = { args: { shape: 'rounded-square' } }
export const Large: Story = { args: { size: 64 } }
