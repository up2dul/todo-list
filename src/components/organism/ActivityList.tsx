import { memo } from 'react';

import type { Activity } from '@/services/store';
import { ActivityCard } from '@/components';

const ActivityList = ({ activities }: { activities: Activity[] }) => (
  <div className='mt-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {activities?.map(({ id, title, created_at }) => (
      <ActivityCard key={id} to={id} title={title} date={created_at} />
    ))}
  </div>
);

export default memo(ActivityList);
