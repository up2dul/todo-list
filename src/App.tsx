import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Activity, Dashboard } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='activity' element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
