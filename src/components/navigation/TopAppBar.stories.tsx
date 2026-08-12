import type { Meta, StoryObj } from '@storybook/react'
import { TopAppBar } from './TopAppBar'
import IconButton from '@/components/primitives/IconButton'
import { Settings, Search } from '@/components/icons'

const meta = {
  title: 'Navigation/TopAppBar',
  component: TopAppBar,
  tags: ['autodocs'],
  args: {
    title: 'Now Playing',
    variant: 'detail',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['detail', 'dashboard'] },
    transparent: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TopAppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Detail: Story = {
  args: {
    title: 'Now Playing',
    onBack: () => {},
    trailing: <IconButton icon={<Settings />} ariaLabel="Settings" />,
  },
}

export const Dashboard: Story = {
  args: {
    variant: 'dashboard',
    title: 'Your Studio',
    trailing: <IconButton icon={<Search />} ariaLabel="Search" />,
  },
}
