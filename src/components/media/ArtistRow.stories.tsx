import type { Meta, StoryObj } from '@storybook/react'
import { ArtistRow } from './ArtistRow'
import { IconButton, Heart, MoreHorizontal } from '@/components'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/ArtistRow',
  component: ArtistRow,
  tags: ['autodocs'],
  args: { cover: covers.bloom, name: 'Jaxon Hayes', subtitle: 'Artist', verified: true },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ArtistRow>

export default meta
type Story = StoryObj<typeof meta>

export const Following: Story = {
  args: {
    trailing: (
      <span className="rounded-full border border-stroke-strong px-3 py-1 type-caption text-content">
        Following
      </span>
    ),
  },
}

export const WithActions: Story = {
  args: {
    name: 'Wishing Well',
    subtitle: 'Juice WRLD',
    verified: false,
    trailing: (
      <span className="flex items-center gap-2">
        <IconButton icon={<Heart className="text-primary" />} ariaLabel="Favourite" size={24} />
        <IconButton icon={<MoreHorizontal />} ariaLabel="More" size={24} />
      </span>
    ),
  },
}
