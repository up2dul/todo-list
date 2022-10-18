import { ReactNode } from 'react';

export type TodoSortPriority = {
  icon: ReactNode;
  title: string;
  isChecked: boolean;
};

export type TodoPriority = TodoSortPriority & {
  cy: PriorityType;
};

export type TodoSort = TodoSortPriority & {
  cy: SortType;
};

export type Todo = {
  id: number;
  title: string;
  activity_group_id: number;
  is_active: boolean;
  priority: PriorityType;
};

export type TodoData = {
  title: string | undefined;
  is_active?: boolean;
  priority: PriorityType;
  activity_group_id?: number;
};

export type PriorityType = 'very-high' | 'high' | 'medium' | 'low' | 'very-low';

export type SortType = 'sort-latest' | 'sort-oldest' | 'sort-az' | 'sort-za' | 'sort-unfinished';
