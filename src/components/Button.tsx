import clsx from 'clsx';

type ButtonProps = {
  children: string;
  color: 'primary' | 'danger' | 'light';
  isDisabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, color } = props;

  const classes: string = clsx(
    'w-[150px] h-[54px] rounded-full text-lg font-bold',
    color === 'primary' && 'bg-primary text-white hover:bg-primary/[.85]',
    color === 'danger' && 'bg-danger text-white hover:bg-danger/[.85]',
    color === 'light' && 'bg-light text-black hover:bg-black/[.2]'
  );

  return <button className={classes}>{children}</button>;
};