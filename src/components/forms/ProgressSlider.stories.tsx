import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ProgressSlider } from './ProgressSlider'

const meta = {
  title: 'Forms/ProgressSlider',
  component: ProgressSlider,
  tags: ['autodocs'],
  args: {
    value: 72,
    max: 228,
    disabled: false,
  },
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressSlider>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabels: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(72)
    return (
      <ProgressSlider
        {...args}
        value={value}
        onSeek={setValue}
        elapsedLabel="1:12"
        totalLabel="3:48"
      />
    )
  },
}

export const BarOnly: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(140)
    return <ProgressSlider {...args} value={value} onSeek={setValue} />
  },
}
