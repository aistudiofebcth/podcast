import type { Meta, StoryObj } from '@storybook/react'
import { GlassCard } from './GlassCard'

const meta = {
  title: 'Layout/GlassCard',
  component: GlassCard,
  tags: ['autodocs'],
  args: {
    opacity: '200',
    children: (
      <div style={{ padding: 20, color: 'white' }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Now playing</div>
        <div style={{ opacity: 0.8 }}>Frosted glass surface</div>
      </div>
    ),
  },
  argTypes: {
    opacity: { control: 'inline-radio', options: ['200', '250', '350'] },
    blur: { control: 'number' },
    radius: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 343,
          padding: 24,
          background: 'linear-gradient(135deg, #1e1b4b, #4c1d95)',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlassCard>

export default meta
type Story = StoryObj<typeof meta>

export const Opacity200: Story = { args: { opacity: '200' } }
export const Opacity250: Story = { args: { opacity: '250' } }
export const Opacity350: Story = { args: { opacity: '350' } }
