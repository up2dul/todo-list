import clsx from 'clsx';

type ButtonProps = {
  children: string;
  color: 'primary' | 'danger' | 'light';
  isDisabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, color } = props;

  const classes: string = clsx(
    'w-[150px] h-[54px] rounded-full font-bold',
    color === 'primary' && 'bg-primary text-white',
    color === 'danger' && 'bg-danger text-white',
    color === 'light' && 'bg-light text-black'
  );

  return <button className={classes}>{children}</button>;
};
