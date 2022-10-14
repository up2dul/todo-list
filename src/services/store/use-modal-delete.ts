/* eslint-disable no-unused-vars */
import create from 'zustand';

type Modal = {
  id: number;
  title: string;
};

type ModalDelete = {
  activityModal: Modal;
  isShow: boolean;
  setActivityModal: (id: number, title: string) => void;
  openModal: () => void;
  closeModal: () => void;
};

const initActivity: Modal = {
  id: 0,
  title: ''
};

export const useModalDelete = create<ModalDelete>((set) => ({
  activityModal: initActivity,
  isShow: false,
  setActivityModal: (id: number, title: string) => {
    set({ activityModal: { id, title } });
  },
  openModal: () => set({ isShow: true }),
  closeModal: () => set({ isShow: false })
}));
