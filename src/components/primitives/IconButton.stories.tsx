import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import { Search, Heart, Close } from '@/components/icons'

const meta = {
  title: 'Primitives/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    icon: <Search />,
    ariaLabel: 'Search',
    shape: 'circle',
    fill: 'transparent',
    size: 40,
  },
  argTypes: {
    shape: { control: 'inline-radio', options: ['circle', 'square'] },
    fill: { control: 'inline-radio', options: ['transparent', 'glass', 'solid-white'] },
    size: { control: 'inline-radio', options: [24, 40, 70] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Transparent: Story = {}
export const Glass: Story = { args: { fill: 'glass', icon: <Heart />, ariaLabel: 'Favourite' } }
export const SolidWhite: Story = { args: { fill: 'solid-white', icon: <Close />, ariaLabel: 'Close' } }
export const Square: Story = { args: { shape: 'square', fill: 'solid-white' } }
export const Large: Story = { args: { size: 70, fill: 'glass' } }
