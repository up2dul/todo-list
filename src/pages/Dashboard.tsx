import { Button } from '@/components';
import { BaseLayout } from '@/layouts';

import addActivitySvg from '@/assets/svg/add-activity.svg';

export const Dashboard = () => {
  return (
    <BaseLayout>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold'>Activity</h1>
        <Button color='primary'>+ Tambah</Button>
      </div>
      <div className='flex justify-center'>
        <img src={addActivitySvg} alt='add first activity' className='mt-16 cursor-pointer' />
      </div>
    </BaseLayout>
  );
};
