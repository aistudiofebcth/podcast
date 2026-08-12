/**
 * Typed accessors for the ZenTune design tokens.
 *
 * The JSON in `design-tokens.json` is the single source of truth (it mirrors
 * the Figma variables). This module re-exports it with types plus a few flat
 * lookup maps that are convenient in TS/JS (e.g. for stories, tests, or
 * runtime theming) without reaching for CSS variables.
 */
import tokens from './design-tokens.json'

export const designTokens = tokens

/** Flat map of every color token -> its resolved CSS value. */
export const colors = {
  primary: tokens.color.brand.primary.value,
  primary700: tokens.color.brand['primary-700'].value,
  primary150: tokens.color.brand['primary-150'].value,
  black: tokens.color.base.black.value,
  white: tokens.color.base.white.value,
  gray700: tokens.color.base['gray-700'].value,
  gray500: tokens.color.base['gray-500'].value,
  warning: tokens.color.status.warning.value,
  whitescale: {
    900: tokens.color.whitescale['900'].value,
    600: tokens.color.whitescale['600'].value,
    500: tokens.color.whitescale['500'].value,
    400: tokens.color.whitescale['400'].value,
    350: tokens.color.whitescale['350'].value,
    250: tokens.color.whitescale['250'].value,
    200: tokens.color.whitescale['200'].value,
    150: tokens.color.whitescale['150'].value,
  },
  darkscale: {
    900: tokens.color.darkscale['900'].value,
    650: tokens.color.darkscale['650'].value,
    500: tokens.color.darkscale['500'].value,
    250: tokens.color.darkscale['250'].value,
  },
} as const

export const radius = tokens.radius
export const spacing = tokens.spacing
export const shadow = tokens.shadow
export const blur = tokens.blur
export const typography = tokens.typography
export const layout = tokens.layout

export type ThemeName = 'dark' | 'light'
export type TypeScaleToken = keyof typeof tokens.typography.scale
export type RadiusToken = keyof typeof tokens.radius

export default designTokens
