/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { TbPencil } from 'react-icons/tb';

import type { PriorityType } from '@/types';
import { PriorityIndicator, TrashButton } from '@/components';
import { useModalTodo, useTodoPriority } from '@/services/store';

type TodoItemProps = {
  cy: number;
  todoId: number;
  title: string;
  priority: PriorityType;
  isActive: boolean;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};

export const TodoItem = ({
  cy,
  todoId,
  title,
  priority,
  isActive,
  onCheck,
  onDelete
}: TodoItemProps) => {
  const { setModal, setModalType, openModal } = useModalTodo((state) => state);
  const { setChecked } = useTodoPriority((state) => state);

  const handleClickEdit = () => {
    setModal({
      id: todoId,
      title,
      priority
    });
    setChecked(priority);
    setModalType('edit');
    console.log('modal edit:', [todoId, title, priority]);

    openModal();
  };

  return (
    <div
      data-cy={'todo-item-' + cy}
      className='flex items-center justify-between rounded-xl bg-light-1 p-7 shadow-md'>
      <div className='flex items-center gap-4'>
        <input
          data-cy='todo-item-checkbox'
          type='checkbox'
          className='h-5 w-5 cursor-pointer'
          checked={!isActive}
          onChange={onCheck}
        />

        <PriorityIndicator priority={priority} />

        <h1
          data-cy='todo-item-title'
          className={clsx(
            'text-lg font-medium text-dark-1',
            !isActive && 'text-dark-2 line-through'
          )}>
          {title}
        </h1>

        <span data-cy='todo-item-edit-button' title='Edit todo' onClick={handleClickEdit}>
          <TbPencil className='cursor-pointer text-xl text-dark-3 hover:text-dark-1' />
        </span>
      </div>

      <TrashButton buttonType='todo' onClick={onDelete} />
    </div>
  );
};
