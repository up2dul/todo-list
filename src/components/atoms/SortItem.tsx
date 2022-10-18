import clsx from 'clsx';
import { TbCheck } from 'react-icons/tb';

import type { TodoSort } from '@/types';

type DropdownItemProps = TodoSort & { onClick: () => void };

export const SortItem = ({ cy, onClick, icon, title, isChecked }: DropdownItemProps) => {
  const classes: string = clsx(
    'w-[235px]',
    'flex items-center justify-between',
    'border-b border-secondary',
    'py-4 px-5',
    'cursor-pointer hover:bg-dark-3/20'
  );

  return (
    <li data-cy={cy} className={classes} onClick={onClick}>
      <div className='flex items-center gap-3'>
        {icon}
        <span>{title}</span>
      </div>
      {isChecked && <TbCheck />}
    </li>
  );
};
