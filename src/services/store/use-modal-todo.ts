/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { Priority } from '@/types';

type Modal = {
  id: number;
  title: string;
  priority: Priority;
};

type ModalTodo = {
  modal: Modal;
  isShow: boolean;
  setModal: (newData: Modal) => void;
  openModal: () => void;
  closeModal: () => void;
};

const initialData: Modal = {
  id: 0,
  title: '',
  priority: 'very-high'
};

export const useModalTodo = create<ModalTodo>((set) => ({
  modal: initialData,
  isShow: false,
  setModal: (newData: Modal) => {
    set({ modal: newData });
  },
  openModal: () => set({ isShow: true }),
  closeModal: () => set({ isShow: false })
}));
