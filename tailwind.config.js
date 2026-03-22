/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        accent: "var(--color-accent)",
        text_main: "var(--text-primary)",
        text_muted: "var(--text-secondary)",
        card: "var(--bg-card)",
        border_subtle: "var(--border-subtle)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
