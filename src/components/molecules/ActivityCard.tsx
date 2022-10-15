import { Link } from 'react-router-dom';

import { useModalDelete } from '@/services/store';
import { dateFormater } from '@/services/utils';
import { TrashButton } from '@/components';

type ActivityCardProps = {
  cy: string;
  to: number;
  title: string;
  date: Date;
};

export const ActivityCard = ({ cy, to, title, date }: ActivityCardProps) => {
  const { setActivityModal, openModal } = useModalDelete((state) => state);

  const handleButtonDelete = () => {
    setActivityModal(to, title);
    openModal();
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
        <p data-cy='activity-item-date'>{dateFormater(date)}</p>

        <TrashButton buttonType='activity' onClick={handleButtonDelete} />
      </div>
    </div>
  );
};
