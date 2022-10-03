import clsx from 'clsx';
import { TbCheck, TbSortDescending } from 'react-icons/tb';

export const SortItem = () => {
  const liClasses: string = clsx(
    'w-[235px]',
    'flex items-center justify-between',
    'border-b border-secondary',
    'py-4 px-5',
    'cursor-pointer hover:bg-dark-3/20'
  );

  return (
    <li data-cy='sort-latest' className={liClasses}>
      <div className='flex items-center gap-3'>
        <TbSortDescending className='text-primary' />
        <span>Terbaru</span>
      </div>
      <TbCheck />
    </li>
  );
};
