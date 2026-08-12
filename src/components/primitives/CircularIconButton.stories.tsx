import type { Meta, StoryObj } from '@storybook/react'
import { CircularIconButton } from './CircularIconButton'
import { Pencil, Play } from '@/components/icons'

const meta = {
  title: 'Primitives/CircularIconButton',
  component: CircularIconButton,
  tags: ['autodocs'],
  args: {
    icon: <Pencil />,
    ariaLabel: 'Edit',
    variant: 'outlined',
    size: 58,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outlined', 'primary-filled'] },
    size: { control: 'inline-radio', options: [49, 58] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof CircularIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Outlined: Story = {}
export const PrimaryFilled: Story = {
  args: { variant: 'primary-filled', icon: <Play />, ariaLabel: 'Play' },
}
export const Small: Story = { args: { size: 49 } }
