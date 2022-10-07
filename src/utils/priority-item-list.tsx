import type { SortItemProps } from '@/types';

export const priorityItemList: SortItemProps[] = [
  {
    cy: 'modal-add-priority-very-high',
    icon: <div className='h-3 w-3 rounded-full bg-priority-vh'></div>,
    title: 'Very High',
    isChecked: true
  },
  {
    cy: 'modal-add-priority-high',
    icon: <div className='h-3 w-3 rounded-full bg-priority-h'></div>,
    title: 'High',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-medium',
    icon: <div className='h-3 w-3 rounded-full bg-priority-m'></div>,
    title: 'Medium',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-low',
    icon: <div className='h-3 w-3 rounded-full bg-priority-l'></div>,
    title: 'Low',
    isChecked: false
  },
  {
    cy: 'modal-add-priority-very-low',
    icon: <div className='h-3 w-3 rounded-full bg-priority-vl'></div>,
    title: 'Very Low',
    isChecked: false
  }
];
