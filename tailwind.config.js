/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // existing karpture-web tokens
        primary: {
          DEFAULT: "hsl(323, 38%, 52%)",
          hover: "hsl(323, 38%, 45%)",
        },
        secondary: "hsl(231, 48%, 48%)",
        accent: "hsl(323, 85%, 70%)",
        background: "hsl(220, 20%, 98%)",
        foreground: "hsl(222, 47%, 11%)",
        muted: {
          DEFAULT: "hsl(215, 16%, 47%)",
          foreground: "hsl(215, 20%, 65%)",
        },
        border: "hsl(214, 32%, 91%)",
        // website landing page tokens
        brand: "hsl(323, 38%, 52%)",
        "brand-light": "hsl(323, 38%, 97%)",
        cream: "hsl(323, 38%, 99%)",
        dark: "#1A1A1A",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}