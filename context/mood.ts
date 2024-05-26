import { create } from "zustand";

type Mood = {
  mood: string;
  setMood: (newMood: string) => void;
};

const useMood = create<Mood>((set) => ({
  mood: "no Mood 🫠",
  setMood: (newMood) => set({ mood: newMood }),
}));

export default useMood;
