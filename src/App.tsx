import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Detail, Dashboard } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/detail/:activityId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
