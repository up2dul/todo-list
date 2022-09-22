import { ReactNode } from 'react';

import { Navbar } from '@/components';

type ContainerProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: ContainerProps) => (
  <>
    <Navbar />
    <main className='mx-36 mt-20'>{children}</main>
  </>
);
