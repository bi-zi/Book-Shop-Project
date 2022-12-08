import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { Context } from './context';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = () => {
  const [sort, setSort] = useState(0);
  const [seacrh, setSeacrh] = useState('');

  const value = {
    sort,
    setSort,
    seacrh,
    setSeacrh,
  };

  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export type GlobalContent = {
  sort: number;
  setSort: (c: number) => void;
};

export default Layout;
