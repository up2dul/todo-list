import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';

import { getAll } from '@/services/api/activity';
import { useActivity } from '@/services/store';
import { ActivityCard } from '@/components';

export const ActivityList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { activities, setActivities } = useActivity((state) => state);

  useEffect(() => {
    getActivities();
  }, []);

  const getActivities = async () => {
    setIsLoading(true);

    await getAll()
      .then((res) => setActivities(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  if (isLoading)
    return (
      <div className='mt-20 flex justify-center'>
        <SpinnerCircular
          size={50}
          thickness={170}
          speed={150}
          color='#16ABF8'
          secondaryColor='#ffffff'
        />
      </div>
    );

  return (
    <div className='mt-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {activities.map((activity, i) => (
        <ActivityCard
          cy={'activity-item-' + i}
          to={activity.id}
          key={activity.id}
          title={activity.title}
          date={activity.created_at}
        />
      ))}
    </div>
  );
};
