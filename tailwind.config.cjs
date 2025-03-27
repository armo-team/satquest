/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff', // Deep blue
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
          950: '#000a1a',
        },
        'accent': {
          50: '#fffde6',
          100: '#fff9b3',
          200: '#fff580',
          300: '#ffef4d',
          400: '#ffe91a',
          500: '#fde100', // Lightning yellow
          600: '#ccb400',
          700: '#998700',
          800: '#665a00',
          900: '#332d00',
          950: '#191600',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(253, 225, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
