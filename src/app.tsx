import { Layout } from './components/layout';
import { MainPage, CategoriesPage, BookPage, BasketPage, NotFoundPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import './style.css';

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
