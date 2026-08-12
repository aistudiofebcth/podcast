import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { TextField } from './TextField'

const meta = {
  title: 'Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    value: '',
    placeholder: 'you@example.com',
    onChangeText: () => {},
  },
  argTypes: {
    type: { control: 'inline-radio', options: ['text', 'email', 'password', 'select', 'date'] },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: (args) => {
    const [v, setV] = React.useState('')
    return <TextField {...args} label="Email" value={v} onChangeText={setV} />
  },
}

export const Password: Story = {
  args: { label: 'Password', placeholder: 'Enter your password' },
  render: (args) => {
    const [v, setV] = React.useState('hunter2')
    return <TextField {...args} type="password" value={v} onChangeText={setV} />
  },
}

export const WithError: Story = {
  args: { label: 'Email', error: 'Please enter a valid email address.' },
  render: (args) => {
    const [v, setV] = React.useState('not-an-email')
    return <TextField {...args} value={v} onChangeText={setV} />
  },
}

export const Select: Story = {
  args: { label: 'Genre', placeholder: 'Choose a genre' },
  render: (args) => {
    const [v, setV] = React.useState('Lo-fi')
    return <TextField {...args} type="select" selected value={v} onChangeText={setV} />
  },
}
