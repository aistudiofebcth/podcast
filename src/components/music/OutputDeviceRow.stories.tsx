import type { Meta, StoryObj } from '@storybook/react'
import { OutputDeviceRow } from './OutputDeviceRow'

const meta = {
  title: 'Music/OutputDeviceRow',
  component: OutputDeviceRow,
  tags: ['autodocs'],
  args: {
    deviceName: 'AirPods Pro',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, background: '#0b0b12', borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OutputDeviceRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const HomePods: Story = { args: { deviceName: 'Living Room' } }
