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
    color === 'primary' && 'bg-primary text-white hover:bg-primary/[.85]',
    color === 'danger' && 'bg-danger text-white hover:bg-danger/[.85]',
    color === 'light' && 'bg-light text-black hover:bg-black/[.2]'
  );

  return (
    <button data-cy={cy} className={classes}>
      {children}
    </button>
  );
};
