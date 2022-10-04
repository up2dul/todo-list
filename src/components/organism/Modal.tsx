import { Button } from '@/components';

export const Modal = () => {
  return (
    <div className='absolute top-0 flex h-full w-full items-center justify-center bg-dark-3/50'>
      <div data-cy='temp' className='w-[830px] rounded-lg bg-light-1 px-10 text-dark-1'>
        <div className='flex justify-between border-b border-secondary py-6 font-medium'>
          <h1 className='text-lg text-dark-1'>Tambah list item</h1>
          <span className='cursor-pointer text-dark-3 hover:text-dark-1'>X</span>
        </div>

        <div className='py-10'>
          <form>
            <label>Nama list item</label>
            <input type='text' />
          </form>
        </div>

        <div className='flex flex-row-reverse border-t border-secondary py-5'>
          <Button cy='modal-add-save-button' color='primary'>
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
};
