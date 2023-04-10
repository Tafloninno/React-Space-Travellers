import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedPage from './pages/SharedPage';
import Home from './pages/home';
import Rockets from './pages/rockets';
import Error from './pages/Error';
import Missions from './pages/missions';
import Profile from './pages/profile';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedPage />}>
        <Route path="/" index element={<Home />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
