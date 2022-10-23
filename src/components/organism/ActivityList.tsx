import { memo, useEffect } from 'react';

import * as aApi from '@/services/api/activity';
import { useActivity } from '@/services/store';
import { ActivityCard } from '@/components';

const ActivityList = () => {
  const { activities, setActivities } = useActivity((state) => state);

  useEffect(() => {
    getActivityList();
  }, []);

  const getActivityList = async () => {
    await aApi
      .getAll()
      .then((res) => setActivities(res.data.data))
      .catch((err) => console.log('There is an error:', err.message));
  };

  return (
    <div className='mt-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {activities?.map(({ id, title, created_at }) => (
        <ActivityCard key={id} to={id} title={title} date={created_at} />
      ))}
    </div>
  );
};

export default memo(ActivityList);
