import { TbTrash } from 'react-icons/tb';

type TrashButtonProps = {
  buttonType: 'activity' | 'todo';
};

export const TrashButton = ({ buttonType }: TrashButtonProps) => (
  <span data-cy={`${buttonType}-item-delete-button`} title={`Delete ${buttonType}`}>
    <TbTrash className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1' />
  </span>
);
