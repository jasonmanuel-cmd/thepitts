/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
          light: '#ef4444',
          subtle: 'rgba(220, 38, 38, 0.15)',
        },
        surface: {
          DEFAULT: '#0a0a0c',
          2: '#121214',
          3: '#1a1a1e',
          4: '#222226',
        },
        text: {
          primary: '#f4f4f5',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        border: {
          subtle: 'hsla(0, 0%, 100%, 0.06)',
          DEFAULT: 'hsla(0, 0%, 100%, 0.1)',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
    },
  },
  plugins: [],
}
