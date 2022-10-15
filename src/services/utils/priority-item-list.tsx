import type { TodoSortProps } from '@/types';
import { PriorityIndicator } from '@/components';

export const priorityItemList: TodoSortProps[] = [
  {
    cy: 'modal-add-priority-very-high',
    icon: <PriorityIndicator priority='very-high' />,
    title: 'Very High',
    isChecked: true
  },
  {
    cy: 'modal-add-priority-high',
    icon: <PriorityIndicator priority='high' />,
    title: 'High',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-medium',
    icon: <PriorityIndicator priority='medium' />,
    title: 'Medium',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-low',
    icon: <PriorityIndicator priority='low' />,
    title: 'Low',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-very-low',
    icon: <PriorityIndicator priority='very-low' />,
    title: 'Very Low',
    isChecked: false
  }
];
