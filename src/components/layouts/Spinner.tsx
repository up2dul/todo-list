import { SpinnerCircular } from 'spinners-react';

export const Spinner = () => (
  <div className='flex h-screen w-full items-center justify-center'>
    <SpinnerCircular
      size={50}
      thickness={170}
      speed={150}
      color='#16ABF8'
      secondaryColor='#ffffff'
    />
  </div>
);
