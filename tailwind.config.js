/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ffffff',
          light: '#ffffff',
          dark: '#e6e6e6',
        },
        accent: {
          DEFAULT: '#6b6b6b',
          light: '#8a8a8a',
          dark: '#4b4b4b',
        },
        success: {
          DEFAULT: '#4caf50',
          light: '#81c784',
          dark: '#388e3c',
        },
        warning: {
          DEFAULT: '#ff9800',
          light: '#ffb74d',
          dark: '#f57c00',
        },
        error: {
          DEFAULT: '#f44336',
          light: '#e57373',
          dark: '#d32f2f',
        },
      },
      boxShadow: {
        'neumorph': '5px 5px 10px rgba(0, 0, 0, 0.25), -5px -5px 10px rgba(255, 255, 255, 0.1)',
        'neumorph-inset': 'inset 5px 5px 10px rgba(0, 0, 0, 0.25), inset -5px -5px 10px rgba(255, 255, 255, 0.1)',
        'neumorph-white': '5px 5px 10px rgba(0, 0, 0, 0.05), -5px -5px 10px rgba(255, 255, 255, 0.8)',
        'neumorph-white-inset': 'inset 5px 5px 10px rgba(0, 0, 0, 0.05), inset -5px -5px 10px rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};