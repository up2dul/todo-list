import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const { setModal, openModal } = useModalDelete((state) => state);

  const handleCardClick = () => navigate('/detail/' + to);

  const handleButtonDelete = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(to, title);
    openModal();
  };

  return (
    <div
      data-cy={cy}
      className='flex h-[234px] cursor-pointer flex-col justify-between rounded-xl bg-light-1 py-6 px-7 shadow-lg'
      onClick={handleCardClick}>
      <h1 data-cy='activity-item-title' className='text-lg font-bold text-dark-1'>
        {title}
      </h1>

      <div className='flex items-center justify-between text-sm font-medium text-dark-3'>
        <p data-cy='activity-item-date'>{dateFormater(date)}</p>

        <TrashButton buttonType='activity' onClick={(e) => handleButtonDelete(e)} />
      </div>
    </div>
  );
};
