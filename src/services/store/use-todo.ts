/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { Priority, SortType, Todo } from '@/types';
import { todosSorter } from '@/services/utils';

type Todos = {
  todos: Todo[];
  detailTodo: Todo;
  setTodos: (data: Todo[]) => void;
  sortTodos: (sortBy: SortType) => void;
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
  },

  sortTodos: (sortBy: SortType) => {
    set((state) => ({
      todos: todosSorter(state.todos, sortBy)
    }));
  }
}));
