import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta = {
  title: 'Media/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    variant: 'full',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['full', 'mark'] },
    width: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Full: Story = {}
export const Mark: Story = { args: { variant: 'mark' } }
