import type { Meta, StoryObj } from '@storybook/react'
import { OnboardingText } from './OnboardingText'

const meta = {
  title: 'Feedback/OnboardingText',
  component: OnboardingText,
  tags: ['autodocs'],
  args: {
    text: 'Tap and hold a track to add it to your queue.',
    align: 'center',
  },
  argTypes: {
    align: { control: 'inline-radio', options: ['center', 'left'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 343, padding: 24, background: '#111', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OnboardingText>

export default meta
type Story = StoryObj<typeof meta>

export const Center: Story = {}

export const Left: Story = { args: { align: 'left' } }

export const Long: Story = {
  args: {
    text: 'Swipe left on any song to reveal quick actions like favourite, add to playlist, and share.',
  },
}
