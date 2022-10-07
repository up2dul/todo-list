import { TbTrash } from 'react-icons/tb';

export const TrashButton = ({ buttonType }: { buttonType: 'activity' | 'todo' }) => (
  <span data-cy={`${buttonType}-item-delete-button`} title={`Delete ${buttonType}`}>
    <TbTrash className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1' />
  </span>
);
