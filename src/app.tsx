import { Layout } from './Components/Layout';
import { MainPage, CategoriesPage, BookPage, BasketPage, NotFoundPage } from './Pages/index';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />,
        <Route path="Category/:name" element={<CategoriesPage />} />,
        <Route path="Book/:id" element={<BookPage />} />,
        {/* <Route path="Basket" element={<BasketPage />} />, */}
        <Route path="*" element={<NotFoundPage />} />,
      </Route>
    </Routes>
  );
};
