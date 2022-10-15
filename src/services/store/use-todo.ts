/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { Priority } from '@/types';

export type Todo = {
  id: number;
  title: string;
  activity_group_id: number;
  is_active: boolean;
  priority: Priority;
};

type Todos = {
  todos: Todo[];
  detailTodo: Todo;
  setTodos: (data: Todo[]) => void;
};

export const useTodo = create<Todos>((set) => ({
  todos: [],
  detailTodo: {
    id: 0,
    title: '',
    activity_group_id: 0,
    is_active: true,
    priority: 'very-high'
  },

  setTodos: (data: Todo[]) => {
    set({ todos: data });
  }
}));
