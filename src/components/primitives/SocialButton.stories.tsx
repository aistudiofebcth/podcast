import type { Meta, StoryObj } from '@storybook/react'
import { SocialButton } from './SocialButton'

const meta = {
  title: 'Primitives/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  args: { provider: 'apple', variant: 'filled' },
  argTypes: {
    provider: { control: 'inline-radio', options: ['apple', 'google', 'facebook'] },
    variant: { control: 'inline-radio', options: ['filled', 'outline'] },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<typeof SocialButton>

export default meta
type Story = StoryObj<typeof meta>

export const Apple: Story = {}
export const Google: Story = { args: { provider: 'google', variant: 'outline' } }
export const Facebook: Story = { args: { provider: 'facebook', variant: 'outline' } }
