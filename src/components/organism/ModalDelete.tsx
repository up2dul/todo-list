import { useRef } from 'react';

import * as aApi from '@/services/api/activity';
import * as tApi from '@/services/api/todo';
import { useActivity, useAlertInformation, useModalDelete, useTodo } from '@/services/store';
import { useClickOutside } from '@/hooks';
import { Button } from '@/components';

import modalDeleteIcon from '@/assets/svg/modal-delete-icon.svg';

export const ModalDelete = ({ type }: { type: 'activity' | 'todo' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { deleteActivityState } = useActivity((state) => state);
  const { deleteTodoState } = useTodo((state) => state);
  const { modal, setModal, closeModal } = useModalDelete((state) => state);
  const { openAlert } = useAlertInformation((state) => state);

  const { id: dataId, title } = modal;

  const handleDelete = async () => {
    if (type === 'activity') {
      await aApi
        .remove(dataId + '')
        .then(() => deleteActivityState(dataId))
        .catch((err) => console.log('There is an error:', err.message))
        .finally(() => {
          setModal(0, '');
          closeModal();
          openAlert();
        });
    }

    if (type === 'todo') {
      await tApi
        .remove(dataId + '')
        .then(() => deleteTodoState(dataId))
        .catch((err) => console.log('There is an error:', err.message))
        .finally(() => {
          setModal(0, '');
          closeModal();
          openAlert();
        });
    }
  };

  const handleCloseModal = () => closeModal();

  useClickOutside(modalRef, handleCloseModal);

  return (
    <div
      ref={modalRef}
      data-cy='modal-delete'
      className='flex w-[490px] flex-col items-center gap-8 rounded-lg bg-light-1 py-10 text-dark-1'>
      <img
        data-cy='modal-delete-icon'
        src={modalDeleteIcon}
        alt='Delete icon'
        className='w-[84px]'
      />

      <p data-cy='modal-delete-title' className='text-center text-lg'>
        Apakah anda yakin menghapus {type} <br />
        <span className='font-bold'>“{title}”?</span>
      </p>

      <div className='flex gap-5'>
        <Button cy='modal-delete-cancel-button' color='light' onClick={handleCloseModal}>
          Batal
        </Button>

        <Button cy='modal-delete-confirm-button' color='danger' onClick={handleDelete}>
          Hapus
        </Button>
      </div>
    </div>
  );
};
