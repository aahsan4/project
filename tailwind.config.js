module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        'heal-primary': '#2563eb',
        'heal-secondary': '#1e40af',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}