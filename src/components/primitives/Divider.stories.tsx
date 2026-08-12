import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
    tone: 'dark',
  },
  argTypes: {
    tone: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: { tone: 'dark' },
  decorators: [
    (Story) => (
      <div style={{ width: 343, padding: 24, background: '#ffffff' }}>
        <Story />
      </div>
    ),
  ],
}

export const Light: Story = {
  args: { tone: 'light' },
  decorators: [
    (Story) => (
      <div style={{ width: 343, padding: 24, background: '#101114' }}>
        <Story />
      </div>
    ),
  ],
}
