import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          1: '#ffffff',
          2: '#ffffffdd'
        },
        one: {
          1: '#3d9970'
        },
        two: {
          1: '#54ab84'
        },
        three: {
          1: '#ddece4'
        },
        four: {
          1: '#00000099',
          2: '#00000022',
          3: '#000000aa',
          4: '#00000055',
          5: '#00000077'
        },
        six: {
          1: '#287a55'
        }
      }
    },
  },
  plugins: [],
}
export default config
