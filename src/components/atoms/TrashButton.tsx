/* eslint-disable no-unused-vars */
import { MouseEvent } from 'react';
import { TbTrash } from 'react-icons/tb';

type TrashButtonProps = {
  buttonType: 'activity' | 'todo';
  onClick: (e: MouseEvent<HTMLElement>) => void;
};

export const TrashButton = ({ buttonType, onClick }: TrashButtonProps) => (
  <span
    data-cy={`${buttonType}-item-delete-button`}
    title={`Delete ${buttonType}`}
    onClick={onClick}>
    <TbTrash className='cursor-pointer text-2xl text-dark-3 hover:text-dark-1' />
  </span>
);
