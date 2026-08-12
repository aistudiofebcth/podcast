import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Play } from '@/components/icons'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  args: { label: 'Log in', variant: 'primary', size: 'lg' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'light', 'secondary'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Light: Story = { args: { variant: 'light', label: 'Log Out' } }
export const Secondary: Story = { args: { variant: 'secondary', label: 'Secondary' } }
export const WithIcon: Story = { args: { leadingIcon: <Play />, label: 'Play all' } }
export const Loading: Story = { args: { loading: true } }
export const FullWidth: Story = { args: { fullWidth: true }, parameters: { layout: 'padded' } }
