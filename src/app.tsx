import React, { Suspense } from 'react';
import Layout from './components/Layout';
import Homepage from './pages/mainPage';
import Category from './pages/categoryPage';
import BookPage from './pages/productPage';
import Basket from './pages/basket';
import NotFoundPage from './pages/notFoundPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />,
        <Route path="Category/:name" element={<Category />} />,
        <Route path="Book/:id" element={<BookPage />} />,
        <Route path="Basket" element={<Basket />} />,
        <Route path="*" element={<NotFoundPage />} />,
      </Route>
    </Routes>
  );
}

export default App;
