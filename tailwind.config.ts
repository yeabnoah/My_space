import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        test: ["CourierPrime"],
      },
      colors: {
        primary: "#cdeff1",
        secondary: "#FBF3D5",
        third: "#D0A2F7",

        test: "#FC819E",
        forth: "#D2E3C8",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
