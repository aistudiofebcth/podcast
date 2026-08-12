import type { Meta, StoryObj } from '@storybook/react'
import { PaginationDots } from './PaginationDots'

const meta = {
  title: 'Navigation/PaginationDots',
  component: PaginationDots,
  tags: ['autodocs'],
  args: {
    count: 4,
    activeIndex: 1,
  },
  argTypes: {
    count: { control: { type: 'number', min: 1, max: 8 } },
    activeIndex: { control: { type: 'number', min: 0, max: 7 } },
  },
} satisfies Meta<typeof PaginationDots>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FirstActive: Story = { args: { activeIndex: 0 } }

export const LastActive: Story = { args: { activeIndex: 3 } }
