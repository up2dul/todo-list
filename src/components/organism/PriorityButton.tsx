import { useRef, useState } from 'react';
import { TbChevronDown } from 'react-icons/tb';

import { useClickOutside } from '@/hooks';
import { PriorityList } from '@/components';

export const PriorityButton = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = () => setIsExpand(false);
  const handleToggle = () => setIsExpand(!isExpand);

  useClickOutside(buttonRef, handleClickOutside);

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        type='button'
        data-cy='modal-add-priority-dropdown'
        onClick={handleToggle}
        className='w-1/4 cursor-pointer rounded-md border border-secondary p-3'>
        Very High <TbChevronDown className='inline' />
      </button>

      {isExpand && <PriorityList />}
    </div>
  );
};
