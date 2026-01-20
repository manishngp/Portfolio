/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // A clean, modern dark theme palette
        primary: "#0f172a", // Dark Slate (Background)
        accent: "#38bdf8",  // Sky Blue (Buttons/Highlights)
        secondary: "#94a3b8" // Grey (Subtext)
      }
    },
  },
  plugins: [],
}

