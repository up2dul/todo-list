import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbChevronLeft, TbPencil, TbPlus } from 'react-icons/tb';

import { update } from '@/services/api/activity';
import { useActivity } from '@/services/store';
import { BaseLayout, Overlay } from '@/components/layouts';
import { Button, ModalAdd, SortButton, TodoItem } from '@/components';

// import addTodoList from '@/assets/svg/add-todo-list.svg';

export const Detail = () => {
  const { activityId } = useParams();

  const [isModal, setIsModal] = useState<boolean>(false);

  const inputTitleRef = useRef<HTMLInputElement>(null);

  const { updateActivityState } = useActivity((state) => state);
  const activity = useActivity(
    (state) => state.activities.filter((a) => a.id + '' === activityId)[0]
  );

  const handleBlur = async () => {
    const newData = activity;
    const newTitle = inputTitleRef.current?.value;
    newData.title = newTitle + '';

    try {
      await update(activityId, newData);
      updateActivityState(newData);
    } catch (err) {
      console.log(err);
    }
  };

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

            <input
              ref={inputTitleRef}
              type='text'
              defaultValue={activity?.title}
              maxLength={26}
              onBlur={handleBlur}
              className='w-3/4 bg-light-2 text-4xl font-bold text-dark-1 outline-none focus:border-b'
            />

            <span data-cy='todo-title-edit-button' className='cursor-pointer text-2xl text-dark-3'>
              <TbPencil />
            </span>
          </div>

          <div className='flex items-center gap-5'>
            <SortButton />
            <Button cy='todo-add-button' onClick={() => setIsModal(true)} color='primary'>
              <TbPlus /> Tambah
            </Button>
          </div>
        </div>

        <div className='mt-12'>
          <TodoItem />
        </div>
      </BaseLayout>
      {/* illustration */}
      {/* <div className='mt-24 flex justify-center'>
        <img
          data-cy='todo-empty-state'
          src={addTodoList}
          alt='add first todo'
          className='cursor-pointer'
        />
        </div> */}
      {isModal && (
        <Overlay>
          <ModalAdd handleClickOutside={() => setIsModal(false)} />
        </Overlay>
      )}
    </>
  );
};
