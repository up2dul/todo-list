import { TbTrash } from 'react-icons/tb';

type TrashButtonProps = {
  buttonType: 'activity' | 'todo';
};

export const TrashButton = ({ buttonType }: TrashButtonProps) => (
  <span
    data-cy={`${buttonType}-item-delete-button`}
    className='cursor-pointer text-2xl text-gray'
    title={`Delete ${buttonType}`}>
    <TbTrash />
  </span>
);
