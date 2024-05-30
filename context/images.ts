import { create } from "zustand";

type Images = {
  images: string[];
  setImages: (newImages: string[]) => void;
  resetImages: () => void;
};

const useImage = create<Images>((set) => ({
  images: [],
  setImages: (newImages: string[]) =>
    set((state) => ({ images: [...state.images, ...newImages] })),
  resetImages: () => set(() => ({ images: [] })),
}));

export default useImage;
