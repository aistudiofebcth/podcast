import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'FEBC Podcast Design System',
    colorPrimary: '#014f6e',
    colorSecondary: '#85bdd6',
    appBg: '#151515',
  }),
})
