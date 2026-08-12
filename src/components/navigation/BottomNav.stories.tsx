import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { BottomNavBar } from './BottomNav'
import { Home, Library, Search } from '@/components/icons'

const meta = {
  title: 'Navigation/BottomNav',
  component: BottomNavBar,
  tags: ['autodocs'],
  args: {
    activeKey: 'home',
    items: [
      { key: 'home', icon: <Home /> },
      { key: 'library', icon: <Library /> },
      { key: 'search', icon: <Search /> },
    ],
    onSelect: () => {},
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['dark', 'onImage'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BottomNavBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState('home')
    return <BottomNavBar {...args} activeKey={activeKey} onSelect={setActiveKey} />
  },
}
