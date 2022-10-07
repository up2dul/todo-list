import { ReactNode } from 'react';

type FormLayoutProps = {
  children: ReactNode;
  cyLabel: string;
  label: string;
};

export const FormLayout = ({ children, cyLabel, label }: FormLayoutProps) => (
  <div>
    <label data-cy={cyLabel} className='mb-2 block text-xs font-medium'>
      {label}
    </label>
    {children}
  </div>
);
