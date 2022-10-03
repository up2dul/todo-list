import { Link } from 'react-router-dom';
import { TbChevronLeft, TbPencil, TbPlus } from 'react-icons/tb';

import { BaseLayout } from '@/layouts';
import { Button, SortButton, TodoItem } from '@/components';

// import addTodoList from '@/assets/svg/add-todo-list.svg';

export const Activity = () => {
  return (
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

          <h1 data-cy='todo-title' className='text-4xl font-bold text-dark-1'>
            New Activity
          </h1>

          <span data-cy='todo-title-edit-button' className='cursor-pointer text-2xl text-dark-3'>
            <TbPencil />
          </span>
        </div>

        <div className='flex items-center gap-5'>
          <SortButton />
          <Button cy='todo-add-button' color='primary'>
            <TbPlus /> Tambah
          </Button>
        </div>
      </div>

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
  );
};
