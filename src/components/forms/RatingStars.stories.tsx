import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { RatingStars } from './RatingStars'

const meta = {
  title: 'Forms/RatingStars',
  component: RatingStars,
  tags: ['autodocs'],
  args: {
    value: 3,
    max: 5,
    readOnly: false,
    disabled: false,
    onChange: () => {},
  },
  argTypes: {
    size: { control: 'number' },
    max: { control: 'number' },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RatingStars>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(3)
    return <RatingStars {...args} value={value} onChange={setValue} />
  },
}

export const ReadOnly: Story = {
  args: { readOnly: true, value: 4 },
  render: (args) => {
    const [value, setValue] = React.useState(4)
    return <RatingStars {...args} value={value} onChange={setValue} />
  },
}
