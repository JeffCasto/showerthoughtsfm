s
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: {
          DEFAULT: "#9EC5E3",
          dark: "#667D92",
        },
      },
      keyframes: {
        steam: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(-10px)" },
        },
      },
      animation: {
        steam: "steam 8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};