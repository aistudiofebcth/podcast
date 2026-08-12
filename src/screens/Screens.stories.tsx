import type { Meta, StoryObj } from '@storybook/react'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import PlayerScreen from './PlayerScreen'
import SettingsScreen from './SettingsScreen'

/**
 * Full composed screens (375×812), each assembled entirely from design-system
 * components. Toggle the toolbar theme to preview dark vs light where relevant.
 */
const meta = {
  title: 'Screens',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = { render: () => <LoginScreen /> }
export const YourStudio: Story = { render: () => <HomeScreen /> }
export const Player: Story = { render: () => <PlayerScreen /> }
export const Settings: Story = { render: () => <SettingsScreen /> }
