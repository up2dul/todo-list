import type { PriorityType, TodoPriority } from '@/types';

import { useTodoPriority } from '@/services/store';
import { PriorityItem } from '@/components';

export const PriorityList = () => {
  const { todoPriority, setChecked } = useTodoPriority((state) => state);

  const handleClick = (cy: PriorityType) => setChecked(cy);

  return (
    <ul
      data-cy='sort-parent'
      className='absolute mt-2 h-36 overflow-scroll rounded-md bg-light-1 text-dark-2 shadow-md'>
      {todoPriority.map((props: TodoPriority) => (
        <PriorityItem key={props.cy} {...props} onClick={() => handleClick(props.cy)} />
      ))}
    </ul>
  );
};
