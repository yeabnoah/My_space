import { create } from "zustand";

type LoginData = {
  isLoggedIn: boolean;
  setIsLoggedIn: (newIsLoggedIn: boolean) => void;
};

const useLoginData = create<LoginData>()((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (newIsLoggedIn) => set({ isLoggedIn: newIsLoggedIn }),
}));

export default useLoginData;
