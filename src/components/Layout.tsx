import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div
      onLoad={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};
