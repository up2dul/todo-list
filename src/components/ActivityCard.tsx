import { TrashButton } from './TrashButton';

type ActivityCardProps = {
  cy: string;
  title: string;
  date: string;
};

export const ActivityCard = ({ cy, title, date }: ActivityCardProps) => (
  <div
    data-cy={cy}
    className='flex h-[234px] flex-col justify-between rounded-xl bg-light-1 py-6 px-7 shadow-lg'>
    <h1 data-cy='activity-item-title' className='cursor-pointer text-lg font-bold text-dark-1'>
      {title}
    </h1>

    <div className='flex items-center justify-between text-sm font-medium text-dark-3'>
      <p data-cy='activity-item-date'>{date}</p>

      <TrashButton buttonType='activity' />
    </div>
  </div>
);
