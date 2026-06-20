/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Clash Display', 'General Sans', 'sans-serif'],
        'body': ['General Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'void': '#05070a',
        'void-2': '#080b11',
        'cyan': '#5ee4ff',
        'green': '#3dffb0',
        'violet': '#9b87ff',
        'pink': '#ff6b9d',
        'ink': '#eef3f8',
        'ink-dim': '#9aa6b4',
        'ink-faint': '#5b6675',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '28px',
      },
      animation: {
        'drift': 'drift 22s ease-in-out infinite',
        'beat': 'beat 2.2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-smooth': 'bounce-smooth 0.4s cubic-bezier(.34, 1.56, .64, 1)',
      },
      keyframes: {
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -5%) scale(1.06)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        'beat': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.78)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'bounce-smooth': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
