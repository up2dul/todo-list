import type { TodoSort, SortType } from '@/types';
import { useTodo, useTodoSort } from '@/services/store';
import { SortItem } from '@/components';

export const SortList = () => {
  const { sortTodos } = useTodo((state) => state);
  const { todoSortProps, setChecked } = useTodoSort((state) => state);

  const handleClick = (cy: SortType) => {
    sortTodos(cy);
    setChecked(cy);
  };

  return (
    <ul data-cy='sort-parent' className='absolute mt-2 rounded-md bg-light-1 text-dark-2 shadow-md'>
      {todoSortProps.map((props: TodoSort) => (
        <SortItem key={props.cy} {...props} onClick={() => handleClick(props.cy)} />
      ))}
    </ul>
  );
};
