import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from './context';
import Header from './header/header';
import Footer from './footer/footer';

const Layout = () => {
  const [sort, setSort] = useState(0);


  const value = {
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

  export type GlobalContent = {
    sort: number;
    setSort: (c: number) => void;
  };


export default Layout;
