import { ReactNode } from 'react';

import { Navbar } from '@/components';

type ContainerProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: ContainerProps) => (
  <>
    <Navbar />
    <main className='px-12 py-10 md:px-32 lg:px-48'>{children}</main>
  </>
);
