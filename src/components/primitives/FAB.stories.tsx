import type { Meta, StoryObj } from '@storybook/react'
import { FAB } from './FAB'
import { Play, Close } from '@/components/icons'

const meta = {
  title: 'Primitives/FAB',
  component: FAB,
  tags: ['autodocs'],
  args: {
    icon: <Play />,
    ariaLabel: 'Play',
    variant: 'primary',
    size: 70,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'light'] },
    size: { control: 'inline-radio', options: [70, 86] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof FAB>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Light: Story = { args: { variant: 'light', icon: <Close />, ariaLabel: 'Close' } }
export const Large: Story = { args: { size: 86 } }
