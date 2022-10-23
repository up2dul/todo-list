import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BaseLayout, Spinner } from '@/components/layouts';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Detail = lazy(() => import('@/pages/Detail'));

const App = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/detail/:activityId' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </BaseLayout>
  );
};

export default App;
