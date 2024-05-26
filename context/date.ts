import { create } from "zustand";

type Date = {
  dateGet: string;
  setDateGet: (newDate: string) => void;
};

const useDate = create<Date>()((set) => ({
  dateGet: "",
  setDateGet: (newDate) => set(() => ({ dateGet: newDate })),
}));

export default useDate;
