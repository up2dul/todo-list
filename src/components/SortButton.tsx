import { TbArrowsUpDown } from 'react-icons/tb';
import { SortList } from './SortList';

export const SortButton = () => (
  <>
    <div className='cursor-pointer rounded-full border border-secondary border-gray p-3 text-2xl text-gray hover:bg-gray/20'>
      <TbArrowsUpDown />
    </div>

    <SortList />
  </>
);
