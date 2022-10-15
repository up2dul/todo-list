import { TbPencil } from 'react-icons/tb';

import type { Priority } from '@/types';
import { PriorityIndicator, TrashButton } from '@/components';

type TodoItemProps = {
  title: string;
  priority: Priority;
};

export const TodoItem = ({ title, priority }: TodoItemProps) => (
  <div className='flex items-center justify-between rounded-xl bg-light-1 p-7 shadow-md'>
    <div className='flex items-center gap-4'>
      <input data-cy='todo-item-checkbox' type='checkbox' className='h-5 w-5' />

      <PriorityIndicator priority={priority} />

      <h1 data-cy='todo-item-title' className='text-lg font-medium text-dark-1'>
        {title}
      </h1>

      <span data-cy='todo-item-edit-button' className='cursor-pointer text-xl text-dark-3'>
        <TbPencil />
      </span>
    </div>

    <TrashButton buttonType='todo' onClick={() => console.log('temporary handler')} />
  </div>
);
