import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

const meta = {
  title: 'Forms/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { label: 'Lo-fi', variant: 'filter', tone: 'neutral', selected: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filter', 'tag'] },
    tone: { control: 'inline-radio', options: ['accent', 'neutral', 'dark'] },
    selected: { control: 'boolean' },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const FilterDefault: Story = {}
export const FilterSelected: Story = { args: { selected: true } }
export const TagAccent: Story = { args: { label: 'New', variant: 'tag', tone: 'accent' } }
export const TagNeutral: Story = { args: { label: 'Explicit', variant: 'tag', tone: 'neutral' } }
