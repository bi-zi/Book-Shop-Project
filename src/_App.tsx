import { Layout } from './components';
import { MainPage, CategoriesPage, BookPage, BasketPage, NotFoundPage } from './pages/index';
import { Routes, Route } from 'react-router-dom';
import './index.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />,
        <Route path="Category/:name" element={<CategoriesPage />} />,
        <Route path="Book/:id" element={<BookPage />} />,
        <Route path="Basket" element={<BasketPage />} />,
        <Route path="*" element={<NotFoundPage />} />,
      </Route>
    </Routes>
  );
};
