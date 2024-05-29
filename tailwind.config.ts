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
        color1: "#686D76",
        color2: "#D2649A",
        color3: "#FF9F66",
        color4: "#FF5580",
        color5: "#A67B5B",
        color6: "#344C64",
        color7: "#C7B7A3",
        color8: "#E1AFD1",
        color9: "#AD88C6",
        color10: "#7AB2B2",
        color11: "#E1ACAC",
        color12: "#CA8787",
        color13: "#BACD92",
        color14: "#3C5B6F",
        color15: "#8576FF",
        color16: "#1679AB",
        color17: "#77B0AA",
        color18: "#E9A89B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
