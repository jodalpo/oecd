/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#2c3e50',
        'danger': '#e74c3c',
        'success': '#2ecc71',
        'warning': '#f1c40f',
        'light-gray': '#ecf0f1',
        'dark-gray': '#7f8c8d',
        'background': '#f4f7f9',
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
