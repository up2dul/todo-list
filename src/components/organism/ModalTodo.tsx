import { useRef } from 'react';
import { TbX } from 'react-icons/tb';

import { useClickOutside } from '@/hooks';
import { FormLayout } from '@/components/layouts';
import { Button, PriorityButton } from '@/components';
import { useModalTodo } from '@/services/store';

type ModalTodoProps = {
  type: 'add' | 'edit';
};

export const ModalTodo = ({ type }: ModalTodoProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { modal, closeModal } = useModalTodo((state) => state);

  const handleClickOutside = () => closeModal();

  useClickOutside(modalRef, handleClickOutside);

  return (
    <div
      ref={modalRef}
      data-cy='modal-add'
      className='w-3/4 rounded-lg bg-light-1 text-dark-1 lg:w-1/2'>
      <div className='flex items-center justify-between border-b border-secondary px-10 py-6 font-medium'>
        <h1 className='text-lg text-dark-1'>Tambah list item</h1>
        <TbX
          onClick={handleClickOutside}
          className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1'
        />
      </div>

      <div className='px-10 py-10'>
        <form className='flex flex-col gap-6'>
          <FormLayout cyLabel={`modal-${type}-name-title`} label='NAMA LIST ITEM'>
            <input
              data-cy={`modal-${type}-name-input`}
              type='text'
              placeholder='Tambahkan nama list item'
              defaultValue={modal?.title}
              className='mt-2 block w-full rounded-md border border-secondary py-4 px-5'
            />
          </FormLayout>

          <FormLayout cyLabel={`modal-${type}-priority-title`} label='PRIORITY'>
            <PriorityButton />
          </FormLayout>
        </form>
      </div>

      <div className='flex flex-row-reverse border-t border-secondary px-10 py-5'>
        <Button
          cy='modal-add-save-button'
          onClick={() => console.log('dari modal')}
          color='primary'>
          Simpan
        </Button>
      </div>
    </div>
  );
};
