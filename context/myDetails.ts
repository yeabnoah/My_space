import { create } from "zustand";

interface User {
  _id: string;
  name: string;
  profilePicture: string;
  username: string;
  password: string;
  diaries: string[];
  theme: string;
  __v: number;
}

interface UserState {
  user: User;
  setUser: (userData: User) => void;
  updateUser: (updatedFields: Partial<User>) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {
    _id: "",
    name: "",
    profilePicture: "",
    username: "",
    password: "",
    diaries: [],
    theme: "",
    __v: 0,
  },
  setUser: (userData) => set({ user: userData }),
  updateUser: (updatedFields) =>
    set((state) => ({
      user: { ...state.user, ...updatedFields },
    })),
}));

export default useUserStore;
