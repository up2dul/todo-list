import { TbArrowsUpDown } from 'react-icons/tb';

import { SortList } from '@/components';

export const SortButton = () => (
  <>
    <div className='cursor-pointer rounded-full border border-secondary border-dark-3 p-3 text-2xl text-dark-3 hover:bg-dark-3/20'>
      <TbArrowsUpDown />
    </div>

    <SortList />
  </>
);
