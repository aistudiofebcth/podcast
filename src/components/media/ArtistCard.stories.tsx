import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArtistCard } from './ArtistCard'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/ArtistCard',
  component: ArtistCard,
  tags: ['autodocs'],
  args: {
    cover: covers.bloom,
    title: 'Aria Bloom',
    subtitle: 'Indie Pop',
    selected: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 106 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ArtistCard>

export default meta
type Story = StoryObj<typeof meta>

export const Unselected: Story = {}

export const Selected: Story = { args: { selected: true } }

export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState(false)
    return <ArtistCard {...args} selected={selected} onToggle={() => setSelected((s) => !s)} />
  },
}
