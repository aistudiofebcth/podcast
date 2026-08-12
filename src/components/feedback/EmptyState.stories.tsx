import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    headline: 'No songs yet',
    supportingText: 'Tracks you add to this playlist will show up here.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HeadlineOnly: Story = {
  args: { headline: 'Nothing here', supportingText: undefined },
}

export const NoResults: Story = {
  args: {
    headline: 'No results found',
    supportingText: 'Try a different search term or check your spelling.',
  },
}
