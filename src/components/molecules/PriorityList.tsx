import type { DropdownItemProps } from '@/types';
import { priorityItemList } from '@/services/utils';
import { PriorityItem } from '@/components';

export const PriorityList = () => {
  return (
    <div className='absolute mt-2'>
      <ul
        data-cy='sort-parent'
        className='h-36 overflow-scroll rounded-md bg-light-1 text-dark-2 shadow-md'>
        {priorityItemList.map((props: DropdownItemProps) => (
          <PriorityItem key={props.cy} {...props} />
        ))}
      </ul>
    </div>
  );
};
