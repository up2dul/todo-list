import { useRef, useState } from 'react';
import { TbArrowsUpDown } from 'react-icons/tb';

import { useClickOutside } from '@/hooks';
import { SortList } from '@/components';

export const SortButton = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const sortButtonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => setIsExpand(false);
  const handleToggle = () => setIsExpand(!isExpand);

  useClickOutside(sortButtonRef, handleClickOutside);

  return (
    <div ref={sortButtonRef} className='relative'>
      <button
        data-cy='todo-sort-button'
        onClick={handleToggle}
        className='cursor-pointer rounded-full border border-secondary p-3 text-2xl text-dark-3 hover:bg-secondary'>
        <TbArrowsUpDown />
      </button>

      {isExpand && <SortList />}
    </div>
  );
};
