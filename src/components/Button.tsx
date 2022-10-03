import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  cy: string;
  color: 'primary' | 'danger' | 'light';
  isDisabled?: boolean;
};

export const Button = ({ children, cy, color }: ButtonProps) => {
  const classes: string = clsx(
    'flex h-[54px] w-[150px] items-center justify-center rounded-full text-lg font-medium',
    color === 'primary' && 'bg-primary text-light-1 hover:bg-primary/80',
    color === 'danger' && 'bg-danger text-light-1 hover:bg-danger/80',
    color === 'light' && 'bg-light-2 text-dark-1 hover:bg-dark-1/20'
  );

  return (
    <button data-cy={cy} className={classes}>
      {children}
    </button>
  );
};
