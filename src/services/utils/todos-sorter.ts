import { SortType, Todo } from '@/types';

export const todosSorter = (todos: Todo[], sortBy: SortType | string) => {
  switch (sortBy) {
    case 'sort-latest':
      return todos.sort((a, b) => b.id - a.id);
    case 'sort-oldest':
      return todos.sort((a, b) => a.id - b.id);
    case 'sort-az':
      return todos.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    case 'sort-za':
      return todos.sort((a, b) => {
        if (b.title < a.title) return -1;
        if (b.title > a.title) return 1;
        return 0;
      });
    case 'sort-unfinished':
      return todos.sort((a, b) => +b.is_active - +a.is_active);
    default:
      break;
  }
};
