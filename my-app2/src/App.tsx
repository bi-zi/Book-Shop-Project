import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import BookPage from './pages/BookPage';
import Category from './pages/Category';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BookPage />} />,
        <Route path="Category" element={<Category />} />,
        <Route path="*" element={<NotFoundPage />} />,
      </Route>
    </Routes>
  );
}

export default App;
