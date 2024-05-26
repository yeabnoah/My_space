import { create } from "zustand";

type Color = {
  color: string;
  setColor: (newColor: string) => void;
};

const useColor = create<Color>()((set) => ({
  color: "primary",
  setColor: (newColor) => set(() => ({ color: newColor })),
}));

export default useColor;
