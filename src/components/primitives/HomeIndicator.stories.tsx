import type { Meta, StoryObj } from '@storybook/react'
import { HomeIndicator } from './HomeIndicator'

const meta = {
  title: 'Primitives/HomeIndicator',
  component: HomeIndicator,
  tags: ['autodocs'],
  args: {
    theme: 'dark',
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['dark', 'light'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HomeIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: { theme: 'dark' },
  decorators: [
    (Story) => (
      <div style={{ width: 343, padding: 12, background: '#101114' }}>
        <Story />
      </div>
    ),
  ],
}

export const Light: Story = {
  args: { theme: 'light' },
  decorators: [
    (Story) => (
      <div style={{ width: 343, padding: 12, background: '#ffffff' }}>
        <Story />
      </div>
    ),
  ],
}
