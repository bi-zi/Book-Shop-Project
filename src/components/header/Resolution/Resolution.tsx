import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/Store';
import { setSortBooks, fetchBooks, fetchCategoryBooks, setClearBooks } from '../../../store/Books/Slice';
import { Link } from 'react-router-dom';
import './Style.css';

export const Resolution = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);

  const sortNumber = booksSlice.sortNumber;
  const category = window.location.pathname.split('/')[2];

  const resetSort = () => {
    dispatch(setClearBooks());

    const category =
      window.location.pathname.split('/')[2]?.length === undefined
        ? 'allBooks'
        : window.location.pathname.split('/')[2];

    if (category === 'allBooks') {
      dispatch(fetchBooks(20));
    } else dispatch(fetchCategoryBooks({ category: category, count: 20 }));
  };

  return (
    <>
      <Link to="/" className="header-all-books">
        Все книги
      </Link>

      <div className="header__drop-down">
        Сортировка
        <div className="header__drop-down__sort">
          <div
            className={`header__drop-down-link ${sortNumber === 1 ? 'active-link' : ''}`}
            onClick={() => dispatch(setSortBooks(1))}>
            По рейтингу
          </div>
          <div
            className={`header__drop-down-link ${sortNumber === 2 ? 'active-link' : ''}`}
            onClick={() => dispatch(setSortBooks(2))}>
            По цене ↑
          </div>
          <div
            className={`header__drop-down-link ${sortNumber === 3 ? 'active-link' : ''}`}
            onClick={() => dispatch(setSortBooks(3))}>
            По цене ↓
          </div>
          <div
            className="header__drop-down-link"
            onClick={() => {
              resetSort();
            }}>
            Сброс
          </div>
        </div>
      </div>

      <div className="header__drop-down">
        Категории
        <div className="header__drop-down-categories">
          <Link
            className={`header__drop-down-link ${
              category === 'businessLiterature' ? 'active-link' : ''
            }`}
            to="Category/businessLiterature">
            Бизнес Литература
          </Link>
          <Link
            className={`header__drop-down-link ${category === 'comicsManga' ? 'active-link' : ''}`}
            to="Category/comicsManga">
            Комиксы и Макгонига
          </Link>
          <Link
            className={`header__drop-down-link ${category === 'detectives' ? 'active-link' : ''}`}
            to="Category/detectives">
            Детективы
          </Link>
          <Link
            className={`header__drop-down-link ${category === 'fantasy' ? 'active-link' : ''}`}
            to="Category/fantasy">
            Фантастика
          </Link>
          <Link
            className={`header__drop-down-link ${category === 'programming' ? 'active-link' : ''}`}
            to="Category/programming">
            Программирование
          </Link>
          <Link
            className={`header__drop-down-link ${category === 'psychology' ? 'active-link' : ''}`}
            to="Category/psychology">
            Психология
          </Link>
        </div>
      </div>

      <Link to="/Basket" className="header-basket">
        Корзина
      </Link>
    </>
  );
};
