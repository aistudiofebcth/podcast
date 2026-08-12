import type { Meta, StoryObj } from '@storybook/react'
import { ListRow } from './ListRow'
import { Bell } from '@/components/icons'

const meta = {
  title: 'Navigation/ListRow',
  component: ListRow,
  tags: ['autodocs'],
  args: {
    label: 'Notifications',
    leading: <Bell />,
    onPress: () => {},
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['row', 'tall'] },
    leadingType: { control: 'inline-radio', options: ['icon', 'avatar', 'thumbnail'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListRow>

export default meta
type Story = StoryObj<typeof meta>

export const IconRow: Story = {
  args: {
    label: 'Notifications',
    leading: <Bell />,
    onPress: () => {},
  },
}

export const WithCaption: Story = {
  args: {
    label: 'Notifications',
    caption: 'Push, email and in-app alerts',
    leading: <Bell />,
    onPress: () => {},
  },
}

export const Tall: Story = {
  args: {
    label: 'Notifications',
    caption: 'Push, email and in-app alerts',
    leading: <Bell />,
    size: 'tall',
    onPress: () => {},
  },
}
