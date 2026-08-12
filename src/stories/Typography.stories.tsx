import type { Meta, StoryObj } from '@storybook/react'

const SCALE: { cls: string; token: string; spec: string }[] = [
  { cls: 'type-heading-1', token: 'heading-1', spec: 'Inter 700 · 38' },
  { cls: 'type-heading-2', token: 'heading-2 (semibold)', spec: 'Inter 600 · 32' },
  { cls: 'type-heading-2-medium', token: 'heading-2 (medium)', spec: 'Inter 500 · 32' },
  { cls: 'type-heading-3', token: 'heading-3 (semibold)', spec: 'Inter 600 · 24' },
  { cls: 'type-heading-3-bold', token: 'heading-3 (bold)', spec: 'Inter 700 · 24' },
  { cls: 'type-body-lg', token: 'body-large-semibold', spec: 'Inter 600 · 18' },
  { cls: 'type-body-bold', token: 'body-base-bold', spec: 'Inter 700 · 16' },
  { cls: 'type-body-medium', token: 'body-base-medium', spec: 'Inter 500 · 16' },
  { cls: 'type-body', token: 'body-base-regular', spec: 'Inter 400 · 16' },
  { cls: 'type-label', token: 'body-medium', spec: 'Inter 600 · 13' },
  { cls: 'type-caption', token: 'body-small', spec: 'Inter 500 · 12' },
  { cls: 'type-micro', token: 'micro', spec: 'Inter 400 · 10' },
]

function TypeScale() {
  return (
    <div className="w-[720px] max-w-full">
      {SCALE.map((row) => (
        <div key={row.token} className="flex items-baseline justify-between gap-6 border-b border-stroke py-4">
          <span className={`${row.cls} text-content`}>ZenTune · เจนจูน</span>
          <span className="shrink-0 text-right">
            <span className="block type-caption text-content">{row.token}</span>
            <span className="block type-micro text-content-muted">{row.spec}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

const meta = {
  title: 'Foundations/Typography',
  render: () => <TypeScale />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
