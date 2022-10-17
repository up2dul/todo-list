/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { SortType, Todo } from '@/types';
import { todosSorter } from '@/services/utils';

type Todos = {
  todos: Todo[];
  setTodos: (data: Todo[]) => void;
  addTodoState: (newData: Todo) => void;
  updateTodoState: (newData: Todo) => void;
  deleteTodoState: (id: number) => void;
  sortTodos: (sortBy: SortType) => void;
};

export const useTodo = create<Todos>((set) => ({
  todos: [],

  setTodos: (data: Todo[]) => {
    set({ todos: data });
  },

  addTodoState: (newData: Todo) => {
    set((state) => ({
      todos: [newData, ...state.todos]
    }));
  },

  updateTodoState: (newData: Todo) => {
    const updateTodo = (todos: Todo[]) => {
      todos.forEach((todo) => {
        if (todo.id === newData.id) todo = newData;
      });
      return todos;
    };
    set((state) => ({
      todos: updateTodo(state.todos)
    }));
  },

  deleteTodoState: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    }));
  },

  sortTodos: (sortBy: SortType) => {
    set((state) => ({
      todos: todosSorter(state.todos, sortBy)
    }));
  }
}));
