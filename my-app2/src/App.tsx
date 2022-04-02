import React from 'react';
import Layout from './components/Layout';
import Homepage from './pages/MainPage';
import Category from './pages/CategoryPage';
import BookPage from './pages/ProductPage';
import Basket from './pages/Basket';
import NotFoundPage from './pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />,
        <Route path="Category" element={<Category />} />,
        <Route path="Book/:id" element={<BookPage />} />,
        <Route path="Basket" element={<Basket />} />,
        <Route path="*" element={<NotFoundPage />} />,
      </Route>
    </Routes>
  );
}

export default App;
