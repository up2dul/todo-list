import { TbPencil } from 'react-icons/tb';

import { TrashButton } from './TrashButton';

export const TodoItem = () => (
  <div className='flex items-center justify-between rounded-xl bg-light-1 p-7 shadow-md'>
    <div className='flex items-center gap-4'>
      <input data-cy='todo-item-checkbox' type='checkbox' className='h-5 w-5' />

      <div
        data-cy='todo-item-priority-indicator'
        className='h-2.5 w-2.5 rounded-full bg-danger'></div>

      <h1 data-cy='todo-item-title' className='text-lg font-medium text-dark-1'>
        Telur ayam
      </h1>

      <span data-cy='todo-item-edit-button' className='cursor-pointer text-xl text-dark-3'>
        <TbPencil />
      </span>
    </div>

    <TrashButton buttonType='todo' />
  </div>
);
