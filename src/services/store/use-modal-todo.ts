/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { PriorityType } from '@/types';

type Modal = {
  id: number;
  title: string;
  priority: PriorityType;
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
