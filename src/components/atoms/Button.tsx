import clsx from 'clsx';

type ButtonProps = {
  children: string;
  color: 'primary' | 'danger' | 'light';
  isDisabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, color } = props;

  const classes = clsx(
    'w-[150px] h-[54px] font-bold  rounded-full',
    color === 'primary' && 'bg-primary text-white',
    color === 'danger' && 'bg-danger text-white',
    color === 'light' && 'bg-gray text-black'
  );

  return <button className={classes}>{children}</button>;
};
