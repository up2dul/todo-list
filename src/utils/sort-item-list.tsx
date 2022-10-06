import {
  TbArrowsUpDown,
  TbSortAscending,
  TbSortAscendingLetters,
  TbSortDescending,
  TbSortDescendingLetters
} from 'react-icons/tb';

import type { SortItemProps } from '@/types';

export const sortItemList: SortItemProps[] = [
  {
    cy: 'sort-latest',
    icon: <TbSortDescending className='text-primary' />,
    title: 'Terbaru',
    isChecked: true
  },
  {
    cy: 'sort-oldest',
    icon: <TbSortAscending className='text-primary' />,
    title: 'Terlama',
    isChecked: false
  },
  {
    cy: 'sort-az',
    icon: <TbSortAscendingLetters className='text-primary' />,
    title: 'A-Z',
    isChecked: false
  },
  {
    cy: 'sort-za',
    icon: <TbSortDescendingLetters className='text-primary' />,
    title: 'Z-A',
    isChecked: false
  },
  {
    cy: 'sort-unfinished',
    icon: <TbArrowsUpDown className='text-primary' />,
    title: 'Belum selesai',
    isChecked: false
  }
];
