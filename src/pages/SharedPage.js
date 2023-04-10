import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navlink';

const SharedPage = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedPage;
