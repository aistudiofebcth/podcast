import type { Meta, StoryObj } from '@storybook/react'

/**
 * Live colour swatches — each box is painted with a Tailwind token class, so it
 * reflects the current theme values from the design-token layer. Swatches sit on
 * a mid-grey backing so translucent whitescale/darkscale steps stay legible.
 */
function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-16 w-full rounded-md" style={{ background: '#808080' }}>
        <div className={`h-full w-full rounded-md ${className}`} />
      </div>
      <span className="type-caption text-content">{name}</span>
    </div>
  )
}

function Group({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <section className="mb-8">
      <h3 className="type-heading-3 text-content mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {items.map(([name, cls]) => (
          <Swatch key={name} name={name} className={cls} />
        ))}
      </div>
    </section>
  )
}

function Palette() {
  return (
    <div className="w-[820px] max-w-full">
      <Group
        title="Brand"
        items={[
          ['primary', 'bg-primary'],
          ['primary-700', 'bg-primary-700'],
          ['primary-150', 'bg-primary-150'],
          ['accent', 'bg-accent'],
          ['accent-700', 'bg-accent-700'],
          ['accent-150', 'bg-accent-150'],
          ['warning', 'bg-warning'],
        ]}
      />
      <Group
        title="Neutrals"
        items={[
          ['ink', 'bg-ink'],
          ['gray-700', 'bg-gray-700'],
          ['gray-500', 'bg-gray-500'],
          ['white-900', 'bg-white-900'],
        ]}
      />
      <Group
        title="Whitescale (translucent white)"
        items={[
          ['white-600', 'bg-white-600'],
          ['white-500', 'bg-white-500'],
          ['white-400', 'bg-white-400'],
          ['white-350', 'bg-white-350'],
          ['white-250', 'bg-white-250'],
          ['white-200', 'bg-white-200'],
          ['white-150', 'bg-white-150'],
        ]}
      />
      <Group
        title="Darkscale (translucent dark)"
        items={[
          ['dark-900', 'bg-dark-900'],
          ['dark-650', 'bg-dark-650'],
          ['dark-500', 'bg-dark-500'],
          ['dark-250', 'bg-dark-250'],
        ]}
      />
      <Group
        title="Semantic (theme-aware)"
        items={[
          ['background', 'bg-background'],
          ['surface', 'bg-surface'],
          ['surface-strong', 'bg-surface-strong'],
          ['glass', 'bg-glass'],
        ]}
      />
    </div>
  )
}

const meta = {
  title: 'Foundations/Colors',
  render: () => <Palette />,
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Palette_: Story = { name: 'Palette' }
