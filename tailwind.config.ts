import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1536px',
      'short': { 'raw': '(max-height: 800px) and (min-width:960px)' },
      'vshort': { 'raw': '(max-height: 652px) and (min-width:960px)' },
    }
  },
  plugins: [],
}
export default config
