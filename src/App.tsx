import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Spinner } from '@/components/layouts';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Detail = lazy(() => import('@/pages/Detail'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/detail/:activityId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
