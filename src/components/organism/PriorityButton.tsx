import { useRef, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';

import { useTodoPriority } from '@/services/store';
import { useClickOutside } from '@/hooks';
import { PriorityList } from '@/components';

export const PriorityButton = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const buttonRef = useRef<HTMLDivElement>(null);

  const { todoPriority } = useTodoPriority((state) => state);
  const selectedPriority = todoPriority.filter((todo) => todo.isChecked === true)[0];

  const handleClickOutside = () => setIsExpand(false);
  const handleToggle = () => setIsExpand(!isExpand);

  useClickOutside(buttonRef, handleClickOutside);

  return (
    <div ref={buttonRef} className='relative'>
      <button
        type='button'
        data-cy='modal-add-priority-dropdown'
        onClick={handleToggle}
        className='w-1/4 cursor-pointer rounded-md border border-secondary p-3'>
        {selectedPriority?.title} <TbChevronDown className='inline' />
      </button>

      {isExpand && <PriorityList />}
    </div>
  );
};
