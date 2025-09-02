/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",        // neon green accent
        "primary-600": "#9BE04F",
        "accent-dark": "#0F0F10",  // deep background
        "panel": "#F5F6F7",        // light panel bg
        "muted": "#6B6B6B",
        "card-dark": "#0E0E10",
      },
      fontFamily: {
        heading: ["Pacifico", "sans-serif"], // or chosen from Figma
        display: ["Libre Baskerville", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
      }
    }
  },
  plugins: [],
}
