import type { Meta, StoryObj } from '@storybook/react'
import { Screen } from './Screen'

const Content = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }}
  >
    <div style={{ fontSize: 22, fontWeight: 700 }}>FEBC</div>
    <div style={{ opacity: 0.7 }}>Your daily mix</div>
  </div>
)

const meta = {
  title: 'Layout/Screen',
  component: Screen,
  tags: ['autodocs'],
  args: {
    theme: 'dark',
    children: <Content />,
  },
  argTypes: {
    theme: { control: 'inline-radio', options: ['dark', 'light'] },
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Screen>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = { args: { theme: 'dark' } }
export const Light: Story = { args: { theme: 'light' } }
