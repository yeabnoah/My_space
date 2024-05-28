import { create } from "zustand";

type Images = {
  images: string[];
  setImages: (newImages: string[]) => void;
};

const useImage = create<Images>((set) => ({
  images: [],
  setImages: (newImages: string[]) =>
    set((state) => ({ images: [...state.images, ...newImages] })),
}));

export default useImage;
