import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgblue: '#0D1F57',
      },
    },
  },
  plugins: [],
}

export default config
