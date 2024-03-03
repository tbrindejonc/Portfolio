import {defineConfig} from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          p_blue: {
            light: {value: '#F0F7FF'},
            light_25: {value: 'rgba(240,247,255, 0.25)'},
            200: {value: '#CCE4FF'},
            300: {value: '#B2D6FF'},
            400: {value: '#99C9FF'},
            main: {value: '#7DB9FF'},
            600: {value: '#005FCC'},
            700: {value: '#004799'},
            800: {value: '#053061'},
            dark: {value: '#001A38'},
            dark_25: {value: 'rgba(0,26,56, 0.25)'},
          },
          p_purple: {
            light: {value: '#FBF5FF'},
            light_25: {value: 'rgba(251,245,255, 0.25)'},
            200: {value: '#F4E5FF'},
            300: {value: '#EACCFF'},
            400: {value: '#DFB2FF'},
            main: {value: '#CF8BFF'},
            600: {value: '#9500FF'},
            700: {value: '#3C0066'},
            800: {value: '#2D004D'},
            dark: {value: '#130823'},
            dark_25: {value: 'rgba(19,8,35, 0.25)'},
          },
          neutral: {
            light: {value: '#E0E5EB'},
            200: {value: '#C2CBD6'},
            300: {value: '#A3B1C2'},
            400: {value: '#8598AD'},
            main: {value: '#667E99'},
            600: {value: '#52657A'},
            700: {value: '#3D4B5C'},
            800: {value: '#29323D'},
            dark: {value: '#14191F'},
          },
          a_green: {
            light: {value: '#D7F4E4'},
            200: {value: '#AFE9C8'},
            300: {value: '#88DDAD'},
            400: {value: '#60D291'},
            main: {value: '#37C374'},
            600: {value: '#38C776'},
            700: {value: '#2D9F5E'},
            800: {value: '#227747'},
            dark: {value: '#16502F'},
          },
          a_red: {
            light: {value: '#F8D3D3'},
            200: {value: '#F0A8A8'},
            300: {value: '#E97C7C'},
            400: {value: '#E15151'},
            main: {value: '#DC3232'},
            600: {value: '#CC3333'},
            700: {value: '#AE1E1E'},
            800: {value: '#831616'},
            dark: {value: '#570F0F'},
          },
        },
        fonts: {
          rubik: {value: 'var(--font-rubik), sans-serif'},
          bricolage: {value: 'var(--font-bricolage), sans-serif'},
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
