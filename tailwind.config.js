/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-bg)',
        'card-bg': 'var(--color-card-bg)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'secondary': 'var(--color-secondary)',
        'danger': 'var(--color-danger)',
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'border-color': 'var(--color-border)',
        'light-gray': 'var(--color-border)', // For backwards compatibility
        'dark-gray': 'var(--color-text-secondary)', // For backwards compatibility
        'white': '#ffffff',
      },
      boxShadow: {
        'DEFAULT': '0 4px 12px var(--color-shadow)',
        'md': '0 6px 16px var(--color-shadow)',
      },
      borderRadius: {
        'DEFAULT': '12px',
      }
    },
  },
  plugins: [],
}
