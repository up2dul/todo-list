import { TbPlus } from 'react-icons/tb';

import { create } from '@/services/api/activity';
import { useActivity, useAlertInformation, useModalDelete } from '@/services/store';
import { BaseLayout, Overlay } from '@/components/layouts';
import { ActivityList, AlertDelete, Button, ModalDelete } from '@/components';

import addActivitySvg from '@/assets/svg/add-activity.svg';

export const Dashboard = () => {
  const { activities, addActivityState } = useActivity((state) => state);
  const { isShow: isShowModalDelete } = useModalDelete((state) => state);
  const { isShow: isShowAlertDelete } = useAlertInformation((state) => state);

  const addActivity = async () => {
    await create()
      .then((res) => addActivityState(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <BaseLayout>
        <div className='flex items-center justify-between'>
          <h1 data-cy='activity-title' className='text-4xl font-bold text-dark-1'>
            Activity
          </h1>

          <Button cy='activity-add-button' color='primary' onClick={addActivity}>
            <TbPlus /> Tambah
          </Button>
        </div>

        {activities.length < 1 && (
          <div className='mt-24 flex justify-center'>
            <img
              data-cy='activity-empty-state'
              src={addActivitySvg}
              alt='add first activity'
              className='cursor-pointer'
            />
          </div>
        )}

        <ActivityList />
      </BaseLayout>

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
