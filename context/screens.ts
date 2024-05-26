import { create } from "zustand";

type Screen = {
  screen: string;
  setScreen: (newScreen: string) => void;
};

const useScreen = create<Screen>((set) => ({
  screen: "",
  setScreen: (newScreen) => set(() => ({ screen: newScreen })),
}));

export default useScreen;
