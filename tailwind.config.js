/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        crvsblue: {
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        crvsgreen: {
          300: "#86efac",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        crvsicon: {
          100: "#e2e8f0",
          900: "#0f172a",
        },
      },
      fontSize: {
        xx: "0.7rem",
        sx: "0.6rem",
        ss: "0.5rem",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      robot: ["Roboto Mono", "monospace"],
      calibri: ["Calibri Regular", "sans-serif"],
      calibribold: ["Calibri Bold", "sans-serif"],
      times: ["Times New Roman", "sans-serif"],
      timesbold: ["Times New Roman Bold", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
