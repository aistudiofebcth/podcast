import type { Config } from 'tailwindcss'

/**
 * ZenTune Tailwind theme.
 *
 * Colors, radii, type scale, shadows, and blur are all wired to the CSS
 * custom properties defined in `src/styles/tokens.css`. Physical palette
 * entries (primary, whitescale/darkscale ramps, gray) are stable; the
 * semantic entries (background, surface, text, border, icon) flip when
 * `data-theme="light"` is set.
 */
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: {
          DEFAULT: 'var(--zt-primary)',
          700: 'var(--zt-primary-700)',
          150: 'var(--zt-primary-150)',
        },
        logo: {
          mark: 'var(--color-logo-mark)',
          wordmark: 'var(--color-logo-wordmark)',
        },
        warning: 'var(--zt-warning)',

        // Neutrals
        ink: 'var(--zt-black)',
        gray: {
          500: 'var(--zt-gray-500)',
          700: 'var(--zt-gray-700)',
        },

        // Whitescale translucency ramp
        white: {
          DEFAULT: '#ffffff',
          900: 'var(--zt-white-900)',
          600: 'var(--zt-white-600)',
          500: 'var(--zt-white-500)',
          400: 'var(--zt-white-400)',
          350: 'var(--zt-white-350)',
          250: 'var(--zt-white-250)',
          200: 'var(--zt-white-200)',
          150: 'var(--zt-white-150)',
        },
        // Darkscale translucency ramp
        dark: {
          900: 'var(--zt-dark-900)',
          650: 'var(--zt-dark-650)',
          500: 'var(--zt-dark-500)',
          250: 'var(--zt-dark-250)',
        },

        // Inputs
        input: {
          fill: 'var(--color-input-filled)',
          border: 'var(--color-input-border)',
        },

        // Semantic (theme-aware)
        background: 'var(--color-background)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          strong: 'var(--color-surface-strong)',
        },
        glass: 'var(--color-glass)',
        scrim: 'var(--color-scrim)',
        content: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },
        icon: 'var(--color-icon)',
        stroke: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      fontSize: {
        'heading-1': ['38px', { lineHeight: '1' }],
        'heading-2': ['32px', { lineHeight: '1' }],
        'heading-3': ['24px', { lineHeight: '1' }],
        'body-lg': ['18px', { lineHeight: '1' }],
        body: ['16px', { lineHeight: '1' }],
        label: ['13px', { lineHeight: '1' }],
        caption: ['12px', { lineHeight: '1' }],
        micro: ['10px', { lineHeight: '1' }],
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        card: 'var(--radius-card)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        glass: 'var(--radius-glass)',
        circle: 'var(--radius-circle)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        'key-dark': 'var(--shadow-key-dark)',
        fab: 'var(--shadow-fab)',
      },
      backdropBlur: {
        sm: '7.5px',
        md: '10px',
        lg: '17.5px',
        xl: '20px',
      },
      spacing: {
        gutter: '15px',
        18: '18px',
        23: '23px',
        '4.5': '18px',
        13: '52px',
        'nav-offset': '34px',
        'screen-w': '375px',
        'screen-h': '812px',
      },
      maxWidth: {
        screen: '375px',
      },
      transitionTimingFunction: {
        zen: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
