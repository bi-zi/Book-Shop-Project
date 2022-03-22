import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from './context';
import Header from './header';

const Layout = () => {
  const [counter, setCount] = useState(1);
  const [sort, setSort] = useState(0);
  const value = {
    counter,
    setCount,
    sort,
    setSort,
  };

  return (
    <Context.Provider value={value}>
      <Header />
      ,
      <Outlet>
        <footer>2022</footer>
      </Outlet>

    </Context.Provider>
  );
};

export default Layout;
