import { SpinnerCircular } from 'spinners-react';

import { BaseLayout } from '@/components/layouts';

export const Spinner = () => (
  <BaseLayout>
    <SpinnerCircular
      size={50}
      thickness={170}
      speed={150}
      color='#16ABF8'
      secondaryColor='#ffffff'
      className='mx-auto'
    />
  </BaseLayout>
);
