/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
          // Primary Brand Forest Greens
          brand: '#1b4332',
          deep: '#0d2818',
          mid: '#2d6a4f',
          light: '#40916c',
          accent: '#52b788',
          mint: '#d8f3dc',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          amber: '#f59e0b',
          warm: '#d97706',
          pale: '#fef9c3',
        },
        earth: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(27, 67, 50, 0.08), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(27, 67, 50, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 35px -10px rgba(13, 40, 24, 0.25), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
