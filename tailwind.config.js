/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      translate: {
        160: '40rem',
        240: '60rem',
        320: '80rem',
        400: '100rem'
      }
    },
  },
  plugins: [],
}

