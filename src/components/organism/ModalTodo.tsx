import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbX } from 'react-icons/tb';

import type { TodoData } from '@/types';
import * as tApi from '@/services/api/todo';
import { useModalTodo, useTodo, useTodoPriority } from '@/services/store';
import { useClickOutside } from '@/hooks';
import { InputLayout } from '@/components/layouts';
import { Button, PriorityButton } from '@/components';

export const ModalTodo = ({ type }: { type: 'add' | 'edit' }) => {
  const { activityId } = useParams<'activityId'>();
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const { addTodoState, updateTodoState } = useTodo((state) => state);
  const { modal, resetModal, closeModal } = useModalTodo((state) => state);
  const { todoPriority, setChecked } = useTodoPriority((state) => state);

  const selectedPriority = todoPriority.filter((todo) => todo.isChecked === true)[0];

  const handleInputEmpty = () => {
    if (inputTitleRef.current?.value.length) setIsInputEmpty(false);
    if (!inputTitleRef.current?.value.length) setIsInputEmpty(true);
  };

  const handleSubmit = () => {
    const newTitle = inputTitleRef.current?.value;
    const newData: TodoData = {
      title: newTitle,
      priority: selectedPriority.cy,
      activity_group_id: parseInt(activityId!)
    };

    if (type === 'add') {
      tApi
        .create(newData)
        .then((res) => addTodoState(res.data))
        .catch((err) => console.log('There is an error:', err.message))
        .finally(() => handleCloseModal());
    }

    if (type === 'edit') {
      tApi
        .update(modal.id + '', newData)
        .then((res) => updateTodoState(res.data))
        .catch((err) => console.log('There is an error:', err.message))
        .finally(() => {
          handleCloseModal();
        });
    }
  };

  const handleCloseModal = () => {
    closeModal();
    resetModal();
    setChecked('very-high');
  };

  useClickOutside(modalRef, handleCloseModal);

  return (
    <div
      ref={modalRef}
      data-cy='modal-add'
      className='w-3/4 rounded-lg bg-light-1 text-dark-1 lg:w-1/2'>
      <div className='flex items-center justify-between border-b border-secondary px-10 py-6 font-medium'>
        <h1 data-cy={`modal-${type}-title`} className='text-lg text-dark-1'>
          {type === 'add' ? 'Tambah' : 'Edit'} list item
        </h1>
        <TbX
          onClick={handleCloseModal}
          className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1'
        />
      </div>

      <form className='flex flex-col gap-6 px-10 py-10'>
        <InputLayout cyLabel={`modal-${type}-name-title`} label='NAMA LIST ITEM'>
          <input
            ref={inputTitleRef}
            data-cy={`modal-${type}-name-input`}
            type='text'
            placeholder='Tambahkan nama list item'
            defaultValue={modal?.title}
            className='mt-2 block w-full rounded-md border border-secondary py-4 px-5'
            onChange={handleInputEmpty}
          />
        </InputLayout>

        <InputLayout cyLabel={`modal-${type}-priority-title`} label='PRIORITY'>
          <PriorityButton />
        </InputLayout>
      </form>

      <div className='flex flex-row-reverse border-t border-secondary px-10 py-5'>
        <Button
          cy={`modal-${type}-save-button`}
          color={isInputEmpty ? 'disabled' : 'primary'}
          onClick={handleSubmit}>
          Simpan
        </Button>
      </div>
    </div>
  );
};
