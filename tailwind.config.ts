import { Sidebar } from "lucide-react";
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
        primary: "#AFC8AD",
        primary1: "#40A578",
        secondary: "#FBF3D5",
        success: "#DED0B6",
        pink: "#FEC7B4",

        Sidebar: "#101317",
        setting: "#352F44",
        test: "#846358",
        background: "#222831",
        back: "#16191f",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
