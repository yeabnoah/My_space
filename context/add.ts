import { create } from "zustand";

type AddState = {
  isAdd: boolean;
  setIsAdd: (newAdd: boolean) => void;
};

const useAdd = create<AddState>((set) => ({
  isAdd: false,
  setIsAdd: (newAdd) => set({ isAdd: newAdd }),
}));

export default useAdd;
