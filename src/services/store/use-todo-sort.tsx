/* eslint-disable no-unused-vars */
import create from 'zustand';
import {
  TbArrowsUpDown,
  TbSortAscending,
  TbSortAscendingLetters,
  TbSortDescending,
  TbSortDescendingLetters
} from 'react-icons/tb';

import type { SortType, TodoSort } from '@/types';

const iconProps: { className: string } = { className: 'text-primary' };

const initSortProps: TodoSort[] = [
  {
    cy: 'sort-latest',
    icon: <TbSortDescending {...iconProps} />,
    title: 'Terbaru',
    isChecked: true
  },
  {
    cy: 'sort-oldest',
    icon: <TbSortAscending {...iconProps} />,
    title: 'Terlama',
    isChecked: false
  },
  {
    cy: 'sort-az',
    icon: <TbSortAscendingLetters {...iconProps} />,
    title: 'A-Z',
    isChecked: false
  },
  {
    cy: 'sort-za',
    icon: <TbSortDescendingLetters {...iconProps} />,
    title: 'Z-A',
    isChecked: false
  },
  {
    cy: 'sort-unfinished',
    icon: <TbArrowsUpDown {...iconProps} />,
    title: 'Belum selesai',
    isChecked: false
  }
];

type TodosSort = {
  todoSortProps: TodoSort[];
  setChecked: (cy: SortType) => void;
};

export const useTodoSort = create<TodosSort>((set) => ({
  todoSortProps: initSortProps,

  setChecked: (cy: SortType) => {
    const check = (list: TodoSort[]) => {
      list.forEach((l) => {
        l.isChecked = false;
        if (l.cy === cy) l.isChecked = true;
      });
      return list;
    };
    set((state) => ({
      todoSortProps: check(state.todoSortProps)
    }));
  }
}));
