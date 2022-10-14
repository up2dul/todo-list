/* eslint-disable no-unused-vars */
import create from 'zustand';

type AlertInformation = {
  isShow: boolean;
  openAlert: () => void;
  closeAlert: () => void;
};

export const useAlertInformation = create<AlertInformation>((set) => ({
  isShow: false,
  openAlert: () => set({ isShow: true }),
  closeAlert: () => set({ isShow: false })
}));
