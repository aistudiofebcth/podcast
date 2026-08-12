import type { Meta, StoryObj } from '@storybook/react'
import { AlbumThumbnail } from './AlbumThumbnail'
import { covers } from '@/lib/placeholder'

const meta = {
  title: 'Media/AlbumThumbnail',
  component: AlbumThumbnail,
  tags: ['autodocs'],
  args: { src: covers.stay, alt: 'Stay', overlay: 'none', size: 80 },
  argTypes: {
    overlay: { control: 'inline-radio', options: ['play', 'pause', 'none'] },
    size: { control: { type: 'range', min: 48, max: 160, step: 8 } },
  },
} satisfies Meta<typeof AlbumThumbnail>

export default meta
type Story = StoryObj<typeof meta>

export const Plain: Story = {}
export const PlayOverlay: Story = { args: { overlay: 'play' } }
export const PauseOverlay: Story = { args: { overlay: 'pause', src: covers.midnight } }
export const Pressable: Story = { args: { overlay: 'play', onPress: () => {} } }
