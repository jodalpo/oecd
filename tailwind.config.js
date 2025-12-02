/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A6B4D',
        'primary-dark': '#3B563D',
        'secondary': '#A98C76',
        'danger': '#D9534F',
        'success': '#4A6B4D',
        'light-gray': '#ecf0f1',
        'dark-gray': '#7f8c8d',
        'text-primary': '#2c3e50',
        'background': '#F9F6F2',
        'white': '#ffffff',
      },
      boxShadow: {
        'DEFAULT': '0 4px 6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'DEFAULT': '12px',
      }
    },
  },
  plugins: [],
}
