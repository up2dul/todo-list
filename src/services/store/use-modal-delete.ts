/* eslint-disable no-unused-vars */
import create from 'zustand';

type Modal = {
  id: number;
  title: string;
};

type ModalDelete = {
  modal: Modal;
  isShow: boolean;
  setModal: (id: number, title: string) => void;
  openModal: () => void;
  closeModal: () => void;
};

const initialData: Modal = {
  id: 0,
  title: ''
};

export const useModalDelete = create<ModalDelete>((set) => ({
  modal: initialData,
  isShow: false,
  setModal: (id: number, title: string) => {
    set({ modal: { id, title } });
  },
  openModal: () => set({ isShow: true }),
  closeModal: () => set({ isShow: false })
}));
