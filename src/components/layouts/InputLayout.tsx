import { ReactNode } from 'react';

type InputLayoutProps = {
  children: ReactNode;
  cyLabel: string;
  label: string;
};

export const InputLayout = ({ children, cyLabel, label }: InputLayoutProps) => (
  <div>
    <label data-cy={cyLabel} className='mb-2 block text-xs font-medium'>
      {label}
    </label>
    {children}
  </div>
);
