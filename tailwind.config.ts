import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        term: {
          bg: '#0a0e0a',
          fg: '#c8f5c8',
          dim: '#5a8a5a',
          accent: '#39ff88',
          amber: '#ffb454',
          red: '#ff5c5c',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        flicker: 'flicker 3s infinite',
      },
      keyframes: {
        blink: { '0%,50%': { opacity: '1' }, '50.01%,100%': { opacity: '0' } },
        flicker: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.97' } },
      },
    },
  },
  plugins: [],
};

export default config;
