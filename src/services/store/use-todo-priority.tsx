/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { PriorityType, TodoPriority } from '@/types';
import { PriorityIndicator } from '@/components';

const initPriority: TodoPriority[] = [
  {
    cy: 'very-high',
    icon: <PriorityIndicator priority='very-high' />,
    title: 'Very High',
    isChecked: true
  },
  {
    cy: 'high',
    icon: <PriorityIndicator priority='high' />,
    title: 'High',
    isChecked: false
  },
  {
    cy: 'normal',
    icon: <PriorityIndicator priority='normal' />,
    title: 'Medium',
    isChecked: false
  },
  {
    cy: 'low',
    icon: <PriorityIndicator priority='low' />,
    title: 'Low',
    isChecked: false
  },
  {
    cy: 'very-low',
    icon: <PriorityIndicator priority='very-low' />,
    title: 'Very Low',
    isChecked: false
  }
];

type TodosPriority = {
  todoPriority: TodoPriority[];
  setChecked: (cy: PriorityType) => void;
};

export const useTodoPriority = create<TodosPriority>((set) => ({
  todoPriority: initPriority,

  setChecked: (cy: PriorityType) => {
    const check = (list: TodoPriority[]) => {
      list.forEach((l) => {
        l.isChecked = false;
        if (l.cy === cy) l.isChecked = true;
      });
      return list;
    };
    set((state) => ({
      todoPriority: check(state.todoPriority)
    }));
  }
}));
