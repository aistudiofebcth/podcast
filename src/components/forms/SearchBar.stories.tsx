import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { SearchBar } from './SearchBar'

const meta = {
  title: 'Forms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Search songs, artists…',
    onChangeText: () => {},
    onSubmit: () => {},
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'onImage'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const OnImage: Story = {
  render: (args) => {
    const [v, setV] = React.useState('')
    return <SearchBar {...args} theme="onImage" value={v} onChangeText={setV} />
  },
}

export const Light: Story = {
  render: (args) => {
    const [v, setV] = React.useState('Midnight')
    return <SearchBar {...args} theme="light" value={v} onChangeText={setV} />
  },
}
