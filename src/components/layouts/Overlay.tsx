import { ReactNode } from 'react';

export const Overlay = ({ children }: { children: ReactNode }) => (
  <div className='absolute top-0 flex h-full w-full items-center justify-center bg-dark-3/50'>
    {children}
  </div>
);
