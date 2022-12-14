/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { PriorityType } from '@/types';

type Modal = {
  id: number;
  title: string;
  priority: PriorityType;
  activity_group_id?: number;
};

type ModalTodo = {
  modal: Modal;
  type: 'add' | 'edit';
  isShow: boolean;
  setModal: (newData: Modal) => void;
  resetModal: () => void;
  setModalType: (type: 'add' | 'edit') => void;
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
  type: 'add',
  isShow: false,

  setModal: (newData: Modal) => {
    set({ modal: newData });
  },

  resetModal: () => set({ modal: initialData, type: 'add' }),

  setModalType: (type: 'add' | 'edit') => set({ type }),

  openModal: () => set({ isShow: true }),

  closeModal: () => set({ isShow: false })
}));
