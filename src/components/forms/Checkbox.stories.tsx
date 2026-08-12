import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    checked: false,
    onChange: () => {},
    label: 'Remember me',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = { args: { checked: true } }

export const Unchecked: Story = { args: { checked: false } }

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false)
    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },
}
