import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './_Header/_Header';
import { Footer } from './_Footer/_Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
