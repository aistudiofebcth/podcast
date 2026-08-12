import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeader } from './SectionHeader'

const meta = {
  title: 'Layout/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  args: {
    title: 'Made for you',
    level: 3,
  },
  argTypes: {
    level: { control: 'inline-radio', options: [2, 3] },
    overline: { control: 'text' },
    subtitle: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Level3: Story = {
  args: {
    title: 'Made for you',
    action: { label: 'See all', onPress: () => {} },
  },
}

export const Level2: Story = {
  args: {
    level: 2,
    overline: 'DISCOVER',
    title: 'Fresh finds',
    subtitle: 'New releases picked for your taste this week.',
  },
}
