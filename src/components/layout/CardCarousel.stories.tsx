import type { Meta, StoryObj } from '@storybook/react'
import { CardCarousel } from './CardCarousel'

const box = (color: string) => (
  <div
    key={color}
    style={{
      width: 120,
      height: 120,
      borderRadius: 16,
      flex: '0 0 auto',
      background: color,
    }}
  />
)

const boxes = ['#f97316', '#6366f1', '#10b981', '#ec4899', '#0ea5e9'].map(box)

const meta = {
  title: 'Layout/CardCarousel',
  component: CardCarousel,
  tags: ['autodocs'],
  args: {
    children: boxes,
  },
  argTypes: {
    layout: { control: 'inline-radio', options: ['horizontal', 'grid'] },
    columns: { control: 'number' },
    gap: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {}

export const Grid: Story = {
  args: {
    layout: 'grid',
    columns: 3,
  },
}
