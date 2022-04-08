import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from './context';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(0);
  const value = {
    page,
    setPage,
    sort,
    setSort,
  };

  return (
    <Context.Provider value={value}>
      <Header />
      <Outlet></Outlet>

      <Footer />
    </Context.Provider>
  );
};

export default Layout;
