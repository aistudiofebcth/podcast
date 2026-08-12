import type { Meta, StoryObj } from '@storybook/react'
import { CollectionPanel } from './CollectionPanel'

const meta = {
  title: 'Music/CollectionPanel',
  component: CollectionPanel,
  tags: ['autodocs'],
  args: {
    title: 'Late Night Drive',
    onEdit: () => {},
    onPlay: () => {},
    children: (
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ width: 96, height: 96, borderRadius: 16, background: '#f24e4e' }} />
        <div style={{ width: 96, height: 96, borderRadius: 16, background: '#4e7bf2' }} />
        <div style={{ width: 96, height: 96, borderRadius: 16, background: '#f2b24e' }} />
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 345 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CollectionPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const LongTitle: Story = { args: { title: 'Songs To Sing In The Shower Loudly' } }
