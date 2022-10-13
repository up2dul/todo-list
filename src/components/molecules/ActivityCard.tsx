import { Link } from 'react-router-dom';

import { remove } from '@/services/api/activity';
import { useActivity } from '@/services/store';
import { formatedDate } from '@/services/utils';
import { TrashButton } from '@/components';

type ActivityCardProps = {
  cy: string;
  to: number;
  title: string;
  date: Date;
};

export const ActivityCard = ({ cy, to, title, date }: ActivityCardProps) => {
  const { deleteActivityState } = useActivity((state) => state);

  const handleDelete = async () => {
    await remove(to + '')
      .then(() => deleteActivityState(to))
      .catch((err) => console.log(err));
  };

  return (
    <div
      data-cy={cy}
      className='flex h-[234px] flex-col justify-between rounded-xl bg-light-1 py-6 px-7 shadow-lg'>
      <Link to={'/detail/' + to}>
        <h1 data-cy='activity-item-title' className='cursor-pointer text-lg font-bold text-dark-1'>
          {title}
        </h1>
      </Link>

      <div className='flex items-center justify-between text-sm font-medium text-dark-3'>
        <p data-cy='activity-item-date'>{formatedDate(date)}</p>

        <TrashButton buttonType='activity' onClick={handleDelete} />
      </div>
    </div>
  );
};
