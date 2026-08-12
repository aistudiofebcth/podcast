import type { Meta, StoryObj } from '@storybook/react'
import { SelectionBadge } from './SelectionBadge'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/SelectionBadge',
  component: SelectionBadge,
  tags: ['autodocs'],
  args: { visible: true, size: 14 },
  argTypes: {
    visible: { control: 'boolean' },
    size: { control: { type: 'range', min: 10, max: 32, step: 2 } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: 96,
          height: 96,
          borderRadius: 16,
          overflow: 'hidden',
          backgroundImage: `url("${covers.stay}")`,
          backgroundSize: 'cover',
        }}
      >
        <div style={{ position: 'absolute', top: 6, right: 6 }}>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SelectionBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Selected: Story = {}
export const Hidden: Story = { args: { visible: false } }
export const Large: Story = { args: { size: 24 } }
