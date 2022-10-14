import { useRef } from 'react';

import { remove } from '@/services/api/activity';
import { useActivity, useAlertInformation, useModalDelete } from '@/services/store';
import { useClickOutside } from '@/hooks';
import { Button } from '@/components';

import modalDeleteIcon from '@/assets/svg/modal-delete-icon.svg';

export const ModalDelete = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { deleteActivityState } = useActivity((state) => state);
  const { activityModal, setActivityModal, closeModal } = useModalDelete((state) => state);
  const { openAlert } = useAlertInformation((state) => state);

  const { id: aId, title } = activityModal;

  const handleDelete = async () => {
    await remove(aId + '')
      .then(() => deleteActivityState(aId))
      .catch((err) => console.log(err))
      .finally(() => {
        setActivityModal(0, '');
        closeModal();
        openAlert();
      });
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
        Apakah anda yakin menghapus activity <br />
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
