import { memo, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbChevronLeft, TbPencil, TbPlus } from 'react-icons/tb';

import * as aApi from '@/services/api/activity';
import { useActivity, useModalTodo, useTodo } from '@/services/store';
import { BaseLayout, Overlay } from '@/components/layouts';
import { Button, ModalTodo, SortButton, TodoList } from '@/components';

import addTodoList from '@/assets/svg/add-todo-list.svg';

const Detail = () => {
  const { activityId } = useParams<'activityId'>();

  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);

  const inputTitleRef = useRef<HTMLInputElement>(null);

  const { detailActivity, setDetailActivity, updateActivityState } = useActivity((state) => state);
  const { todos } = useTodo((state) => state);

  const { isShow, type: modalType, openModal } = useModalTodo((state) => state);

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    await aApi
      .getDetail(activityId)
      .then((res) => setDetailActivity(res.data))
      .catch((err) => console.log('There is an error:', err.message));
  };

  const handleBlur = async () => {
    setIsEditTitle(false);

    const newData = detailActivity;
    const newTitle = inputTitleRef.current?.value;
    newData.title = newTitle + '';

    await aApi
      .update(activityId, newData)
      .then(() => updateActivityState(newData))
      .catch((err) => console.log('There is an error:', err.message));
  };

  return (
    <>
      <BaseLayout>
        <div className='flex items-center justify-between gap-5'>
          <div className='flex items-center gap-5'>
            <Link to='/'>
              <span
                data-cy='todo-back-button'
                className='cursor-pointer text-3xl'
                title='Back to dashboard'>
                <TbChevronLeft />
              </span>
            </Link>

            {isEditTitle ? (
              <input
                ref={inputTitleRef}
                type='text'
                defaultValue={detailActivity?.title}
                maxLength={26}
                onBlur={handleBlur}
                className='w-3/4 bg-light-2 text-4xl font-bold text-dark-1 outline-none focus:border-b'
                autoFocus
              />
            ) : (
              <h1
                data-cy='todo-title'
                className='text-4xl font-bold text-dark-1'
                onClick={() => setIsEditTitle(true)}>
                {detailActivity?.title}
              </h1>
            )}

            <span
              data-cy='todo-title-edit-button'
              title='Edit title'
              onClick={() => setIsEditTitle(true)}>
              <TbPencil className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1' />
            </span>
          </div>

          <div className='flex items-center gap-5'>
            {todos.length > 0 && <SortButton />}
            <Button cy='todo-add-button' onClick={openModal} color='primary'>
              <TbPlus /> Tambah
            </Button>
          </div>
        </div>

        {todos.length < 1 && (
          <div className='mt-24 flex justify-center'>
            <img
              data-cy='todo-empty-state'
              src={addTodoList}
              alt='add first todo'
              className='cursor-pointer'
              onClick={openModal}
            />
          </div>
        )}

        <TodoList />
      </BaseLayout>

      {isShow && (
        <Overlay>
          <ModalTodo type={modalType} />
        </Overlay>
      )}
    </>
  );
};

export default memo(Detail);
