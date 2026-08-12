import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ToggleSwitch } from './ToggleSwitch'

const meta = {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  args: {
    checked: false,
    onChange: () => {},
    ariaLabel: 'Enable notifications',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ToggleSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const On: Story = { args: { checked: true } }

export const Off: Story = { args: { checked: false } }

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false)
    return <ToggleSwitch {...args} checked={checked} onChange={setChecked} />
  },
}
