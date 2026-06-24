export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Dark Navy
        secondary: "#14B8A6", // Teal Green
        accent: "#FACC15", // Golden Yellow
        background: "#F8FAFC", // Light Gray/White
        textDark: "#111827", // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
