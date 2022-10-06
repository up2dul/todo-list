import { Button } from '@/components';
import { useClickOutside } from '@/hooks';
import { useRef } from 'react';

type ModalProps = {
  handleClickOutside: () => void;
};

export const Modal = ({ handleClickOutside }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, handleClickOutside);

  return (
    <div
      ref={modalRef}
      data-cy='temp'
      className='w-[830px] rounded-lg bg-light-1 px-10 text-dark-1'>
      <div className='flex justify-between border-b border-secondary py-6 font-medium'>
        <h1 className='text-lg text-dark-1'>Tambah list item</h1>
        <span onClick={handleClickOutside} className='cursor-pointer text-dark-3 hover:text-dark-1'>
          X
        </span>
      </div>

      <div className='py-10'>
        <form>
          <label>Nama list item</label>
          <input type='text' />
        </form>
      </div>

      <div className='flex flex-row-reverse border-t border-secondary py-5'>
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
