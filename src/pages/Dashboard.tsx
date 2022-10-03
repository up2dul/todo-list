import { TbPlus } from 'react-icons/tb';

import { BaseLayout } from '@/layouts';
import { ActivityCard, Button } from '@/components';

// import addActivitySvg from '@/assets/svg/add-activity.svg';

export const Dashboard = () => {
  return (
    <BaseLayout>
      <div className='flex items-center justify-between'>
        <h1 data-cy='activity-title' className='text-4xl font-bold text-dark-1'>
          Activity
        </h1>

        <Button cy='activity-add-button' color='primary'>
          <TbPlus /> Tambah
        </Button>
      </div>

      {/* <div className='mt-24 flex justify-center'>
        <img data-cy='activity-empty-state' src={addActivitySvg} alt='add first activity' className='cursor-pointer' />
      </div> */}

      <div className='mt-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ActivityCard cy='activity-item-0' title='Meeting dengan client' date='21 Oktober 2021' />
        <ActivityCard cy='activity-item-1' title='Bertemu dokter' date='22 Oktober 2021' />
        <ActivityCard cy='activity-item-2' title='Mengerjakan skripsi' date='5 Oktober 2021' />
        <ActivityCard cy='activity-item-3' title='Daftar belanja bulanan' date='3 Oktober 2021' />
      </div>
    </BaseLayout>
  );
};
