import { useRef } from 'react';
import { TbAlertCircle } from 'react-icons/tb';

import { useAlertInformation } from '@/services/store';
import { useClickOutside } from '@/hooks';

export const AlertDelete = ({ type }: { type: 'activity' | 'todo' }) => {
  const alertRef = useRef<HTMLDivElement>(null);

  const { closeAlert } = useAlertInformation((state) => state);

  useClickOutside(alertRef, closeAlert);

  return (
    <div
      ref={alertRef}
      data-cy='modal-information'
      className='flex h-14 w-[615px] items-center gap-3 rounded-lg bg-light-1 px-7'>
      <span data-cy='modal-information-icon'>
        <TbAlertCircle className='h-6 w-6 text-primary' />
      </span>
      <p data-cy='modal-information-title' className='font-medium text-dark-1'>
        Data {type} berhasil dihapus
      </p>
    </div>
  );
};
