import { create } from "zustand";

interface Diary {
  _id: string;
  userId: string;
  content: string;
  picture: string[];
  mood: string;
  theme: string;
  isPublic: boolean;
  date: string;
  status: boolean;
  reports: any[];
  likes: any[];
  dislikes: any[];
  comments: any[];
}

interface DiaryState {
  diary: Diary;
  setDiary: (newDiary: Diary) => void;
  resetDiary: () => void;
}

const initialDiary: Diary = {
  _id: "",
  userId: "",
  content: "",
  picture: [],
  mood: "",
  theme: "",
  isPublic: false,
  date: "",
  status: true,
  reports: [],
  likes: [],
  dislikes: [],
  comments: [],
};

const useDiaryState = create<DiaryState>((set) => ({
  diary: initialDiary,
  setDiary: (setDiary) => set({ diary: setDiary }),
  resetDiary: () => set({ diary: initialDiary }),
}));

export default useDiaryState;
