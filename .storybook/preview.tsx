import * as React from 'react'
import type { Preview } from '@storybook/react'

// Inter (the ZenTune type family) + the design-system global styles/tokens.
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: [
          'Foundations',
          'Primitives',
          'Forms',
          'Media',
          'Navigation',
          'Layout',
          'Feedback',
          'Music',
          'Screens',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'ZenTune token theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'light' ? 'light' : 'dark'
      return (
        <div
          data-theme={theme}
          style={{
            background: theme === 'light' ? '#ffffff' : '#151515',
            color: theme === 'light' ? '#151515' : '#ffffff',
            padding: 32,
            borderRadius: 20,
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
