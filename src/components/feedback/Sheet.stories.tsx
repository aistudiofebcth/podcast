import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Sheet } from './Sheet'

const meta = {
  title: 'Feedback/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  args: { open: true, onClose: () => {}, children: null },
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['modal', 'glass-sheet'] },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: { variant: 'modal', dismissLabel: 'Cancel' },
  render: (args) => {
    const [open, setOpen] = React.useState(true)
    return (
      <div style={{ minHeight: 480, padding: 24 }}>
        <button type="button" onClick={() => setOpen(true)}>
          Open sheet
        </button>
        <Sheet {...args} open={open} onClose={() => setOpen(false)}>
          <h3 className="type-heading-3 text-content">Delete playlist?</h3>
          <p className="type-body text-content-muted">This action can’t be undone.</p>
        </Sheet>
      </div>
    )
  },
}

export const GlassSheet: Story = {
  args: { variant: 'glass-sheet' },
  render: (args) => {
    const [open, setOpen] = React.useState(true)
    return (
      <div style={{ minHeight: 480, padding: 24 }}>
        <button type="button" onClick={() => setOpen(true)}>
          Open sheet
        </button>
        <Sheet {...args} open={open} onClose={() => setOpen(false)}>
          <h3 className="type-heading-3 text-content">Now playing</h3>
          <p className="type-body text-content-muted">Swipe down or tap close to dismiss.</p>
        </Sheet>
      </div>
    )
  },
}
