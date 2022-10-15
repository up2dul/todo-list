import { ReactNode } from 'react';

export type DropdownItemProps = {
  cy: string;
  icon: ReactNode;
  title: string;
  isChecked: boolean;
};

export type Priority = 'very-high' | 'high' | 'medium' | 'low' | 'very-low';
