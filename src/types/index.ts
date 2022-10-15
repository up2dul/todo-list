import { ReactNode } from 'react';

export type TodoSortProps = {
  cy: string;
  icon: ReactNode;
  title: string;
  isChecked: boolean;
};

export type Todo = {
  id: number;
  title: string;
  activity_group_id: number;
  is_active: boolean;
  priority: Priority;
};

export type Priority = 'very-high' | 'high' | 'medium' | 'low' | 'very-low';

export type TodoData = {
  title: string;
  is_active: boolean;
  priority: Priority;
};

export type SortType =
  | 'sort-latest'
  | 'sort-oldest'
  | 'sort-az'
  | 'sort-za'
  | 'sort-unfinished'
  | string;
