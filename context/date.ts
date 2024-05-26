import { create } from "zustand";

type Date = {
  dateGet: string;
  setDateGet: (newDate: string) => void;
};

const useDate = create<Date>()((set) => ({
  dateGet: "Oct 24, 2003",
  setDateGet: (newDate) => set(() => ({ dateGet: newDate })),
}));

export default useDate;
