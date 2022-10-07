import { useRef } from 'react';
import { TbX } from 'react-icons/tb';

import { useClickOutside } from '@/hooks';
import { FormLayout } from '@/components/layouts';
import { Button, PriorityButton } from '@/components';

type ModalProps = {
  handleClickOutside: () => void;
};

export const ModalAdd = ({ handleClickOutside }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, handleClickOutside);

  return (
    <div ref={modalRef} data-cy='temp' className='w-3/4 rounded-lg bg-light-1 text-dark-1 lg:w-1/2'>
      <div className='flex items-center justify-between border-b border-secondary px-10 py-6 font-medium'>
        <h1 className='text-lg text-dark-1'>Tambah list item</h1>
        <TbX
          onClick={handleClickOutside}
          className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1'
        />
      </div>

      <div className='px-10 py-10'>
        <form className='flex flex-col gap-6'>
          <FormLayout cyLabel='modal-add-name-title' label='NAMA LIST ITEM'>
            <input
              data-cy='modal-add-name-input'
              type='text'
              placeholder='Tambahkan nama list item'
              className='mt-2 block w-full rounded-md border border-secondary py-4 px-5'
            />
          </FormLayout>

          <FormLayout cyLabel='modal-add-priority-title' label='PRIORITY'>
            <PriorityButton />
            {/* <select
              data-cy='modal-add-priority-dropdown'
              className='mt-2 block rounded-md py-4 px-5'>
              <option
                data-cy='modal-add-priority-very-high'
                value='very-high'
                className='py-4 px-5'
                selected>
                Very High
              </option>
              <option data-cy='modal-add-priority-high' value='high'>
                High
              </option>
              <option data-cy='modal-add-priority-medium' value='medium'>
                Medium
              </option>
              <option data-cy='modal-add-priority-low' value='low'>
                Low
              </option>
              <option data-cy='modal-add-priority-very-low' value='very-low'>
                Very Low
              </option>
            </select> */}
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
