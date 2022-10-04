import { SortItem } from '@/components';

export const SortList = () => {
  return (
    <div className='relative'>
      <div className='absolute -left-24 top-8'>
        <ul data-cy='sort-parent' className='rounded-md bg-light-1 text-dark-2 shadow-md'>
          <SortItem />
          {/* <li data-cy='sort-latest' className=''>
            <div className='flex items-center gap-3'>
              <TbSortDescending className='text-primary' />
              <span>Terbaru</span>
            </div>
            <TbCheck />
          </li> */}
          {/* <li className={liClasses}>
            <div className='flex items-center gap-3'>
              <TbSortAscending className='text-primary' />
              <span>Terlama</span>
            </div>
          </li>
          <li className={liClasses}>
            <div className='flex items-center gap-3'>
              <TbSortAscendingLetters className='text-primary' />
              <span>A-Z</span>
            </div>
          </li>
          <li className={liClasses}>
            <div className='flex items-center gap-3'>
              <TbSortDescendingLetters className='text-primary' />
              <span>Z-A</span>
            </div>
          </li>
          <li className={liClasses}>
            <div className='flex items-center gap-3'>
              <TbArrowsUpDown className='text-primary' />
              <span>Belum selesai</span>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
