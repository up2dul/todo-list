import type { DropdownItemProps } from '@/types';
import { SortItem } from '@/components';
import { sortItemList } from '@/services/utils';

export const SortList = () => {
  return (
    <div className='absolute mt-2'>
      <ul data-cy='sort-parent' className='rounded-md bg-light-1 text-dark-2 shadow-md'>
        {sortItemList.map((props: DropdownItemProps) => (
          <SortItem key={props.cy} {...props} />
        ))}
      </ul>
    </div>
  );
};
