import { ReactNode } from 'react';

import { Header } from '@/components';

export const BaseLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className='px-12 py-10 md:px-32 lg:px-48'>{children}</main>
  </>
);
