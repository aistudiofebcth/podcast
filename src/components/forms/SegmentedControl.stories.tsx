import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { SegmentedControl } from './SegmentedControl'

const options = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
]

const meta = {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: {
    options,
    value: 'week',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Week: Story = { args: { value: 'week' } }

export const Month: Story = { args: { value: 'month' } }

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('day')
    return <SegmentedControl {...args} value={value} onChange={setValue} />
  },
}
