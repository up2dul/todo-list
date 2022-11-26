import { useEffect } from 'react';
import { TbPlus } from 'react-icons/tb';

import * as aApi from '@/services/api/activity';
import { useActivity, useAlertInformation, useModalDelete } from '@/services/store';
import { Overlay } from '@/components/layouts';
import { ActivityList, AlertDelete, Button, ModalDelete } from '@/components';

import addActivitySvg from '@/assets/svg/add-activity.svg';

const Dashboard = () => {
  const { activities, setActivities } = useActivity((state) => state);
  const { isShow: isShowModalDelete } = useModalDelete((state) => state);
  const { isShow: isShowAlertDelete } = useAlertInformation((state) => state);

  useEffect(() => {
    getActivities();
  }, []);

  const getActivities = () => {
    aApi
      .getAll()
      .then((res) => setActivities(res.data.data))
      .catch((err) => console.log('There is an error:', err.message));
  };

  const addActivity = () => {
    aApi
      .create()
      .then(() => getActivities())
      .catch((err) => console.log('There is an error:', err.message));
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 data-cy='activity-title' className='text-4xl font-bold text-dark-1'>
          Activity
        </h1>

        <Button cy='activity-add-button' color='primary' onClick={addActivity}>
          <TbPlus /> Tambah
        </Button>
      </div>

      <ActivityList activities={activities} />

      {activities.length < 1 && (
        <div className='mt-24 flex justify-center'>
          <img
            data-cy='activity-empty-state'
            src={addActivitySvg}
            alt='add first activity'
            className='cursor-pointer'
            onClick={addActivity}
          />
        </div>
      )}

      {isShowModalDelete && (
        <Overlay>
          <ModalDelete type='activity' />
        </Overlay>
      )}

      {isShowAlertDelete && (
        <Overlay>
          <AlertDelete type='activity' />
        </Overlay>
      )}
    </>
  );
};

export default Dashboard;
