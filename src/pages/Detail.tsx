import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbCheck, TbChevronLeft, TbPencil, TbPlus } from 'react-icons/tb';

import { useClickOutside } from '@/hooks';
import { BaseLayout } from '@/components/layouts';
import { Button, Modal, SortButton, TodoItem } from '@/components';

// import addTodoList from '@/assets/svg/add-todo-list.svg';

export const Detail = () => {
  const [todoTitle, setTodoTitle] = useState<string>('New activity');
  const [isEditTodoTitle, setIsEditTodoTitle] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = () => setIsEditTodoTitle(false);

  useClickOutside(inputRef, handleClickOutside);

  return (
    <>
      <BaseLayout>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <Link to='/'>
              <span
                data-cy='todo-back-button'
                className='cursor-pointer text-3xl'
                title='Back to dashboard'>
                <TbChevronLeft />
              </span>
            </Link>

            {!isEditTodoTitle ? (
              <div onClick={() => setIsEditTodoTitle(true)}>
                <h1 data-cy='todo-title' className='text-4xl font-bold text-dark-1'>
                  {todoTitle}
                </h1>
              </div>
            ) : (
              <input
                ref={inputRef}
                type='text'
                value={todoTitle}
                maxLength={26}
                onChange={({ target }) => setTodoTitle(target.value)}
                className='w-3/4 border-b bg-light-2 text-4xl font-bold text-dark-1 outline-none'
                autoFocus
              />
            )}
            <span
              data-cy='todo-title-edit-button'
              onClick={() => setIsEditTodoTitle(true)}
              className='cursor-pointer text-2xl text-dark-3'>
              {!isEditTodoTitle ? <TbPencil /> : <TbCheck />}
            </span>
          </div>

          <div className='flex items-center gap-5'>
            <SortButton />
            <Button cy='todo-add-button' onClick={() => setIsModal(true)} color='primary'>
              <TbPlus /> Tambah
            </Button>
          </div>
        </div>

        {/* illustration */}
        {/* <div className='mt-24 flex justify-center'>
        <img
          data-cy='todo-empty-state'
          src={addTodoList}
          alt='add first todo'
          className='cursor-pointer'
        />
      </div> */}
        <div className='mt-12'>
          <TodoItem />
        </div>
      </BaseLayout>

      {isModal && (
        <div className='absolute top-0 flex h-full w-full items-center justify-center bg-dark-3/50'>
          <Modal handleClickOutside={() => setIsModal(false)} />
        </div>
      )}
    </>
  );
};
