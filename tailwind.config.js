/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-150deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s  infinite",
        "slide-in-left": "slide-in-left  1s  forwards",
        "slide-in-left-fast": "slide-in-left 1s var(--cubic-bezier) forwards",
        "slide-in-right-fast": "slide-in-right 1s var(--cubic-bezier) forwards",
        "slide-in-up-fast": "slide-in-up 1s var(--cubic-bezier) forwards",
        "slide-in-right": "slide-in-right 1s forwards",
        "slide-in-up": "slide-in-up 1s forwards",
        "slide-in-down": "slide-in-down 1s forwards",
        "slide-in-down-fast": "slide-in-down 1s var(--cubic-bezier) forwards",
        marquee: "marquee 15s linear  infinite",
      },
      colors: {
        Primary: "#2f2f2f",
        Secondary: "#9f9f9f",
        SecondaryButton: "#f4d82e",
        Tertiary: "#f9f9f9",
        PrimaryButton: "#428897",
        "black-custom": "#4E4E4E",
        "grey-custom": "#898989",
      },
      fontFamily: { sans: ["Space Grotesk", "sans-serif"] },
      width: {
        'hvw': '50vw', // Define your custom vw value
      },
    },
  },
  plugins: [],
};
