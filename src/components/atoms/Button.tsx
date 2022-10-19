import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  cy: string;
  color: 'primary' | 'danger' | 'light' | 'disabled';
  onClick: () => void;
};

export const Button = ({ children, cy, color, onClick }: ButtonProps) => {
  const classes: string = clsx(
    'flex h-[54px] w-[150px] items-center justify-center rounded-full text-lg font-medium',
    color === 'primary' && 'bg-primary text-light-1 hover:bg-primary/80',
    color === 'danger' && 'bg-danger text-light-1 hover:bg-danger/80',
    color === 'light' && 'bg-light-2 text-dark-1 hover:bg-dark-1/20',
    color === 'disabled' && 'bg-secondary text-dark-3 cursor-not-allowed'
  );

  return (
    <button data-cy={cy} className={classes} onClick={onClick} disabled={color === 'disabled'}>
      {children}
    </button>
  );
};
