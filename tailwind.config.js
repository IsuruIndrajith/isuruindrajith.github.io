/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom design tokens will be added here based on DESIGN.md
      colors: {
        // Will be populated from design tokens
      },
      spacing: {
        // Will be populated from design tokens (8px grid)
      },
      fontFamily: {
        // Will be populated from design tokens
      },
      borderRadius: {
        // Will be populated from design tokens
      },
    },
  },
  plugins: [],
}