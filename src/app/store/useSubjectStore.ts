import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ISubject {
  value: string | null;
  icon: string | null;
  iconBg: string | null;
}

interface ISubjectStore {
  subject: ISubject;
  selectSubject: ({ value, icon, iconBg }: ISubject) => void;
}

export const useSubjectStore = create<ISubjectStore>()(
  devtools((set) => ({
    subject: {
      value: null,
      icon: null,
      iconBg: null,
    },
    selectSubject: ({ value, icon, iconBg }) =>
      set(() => ({ subject: { value, icon, iconBg } })),
  }))
);
