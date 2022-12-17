import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/Store';
import { setSortBooks } from '../../../store/Books/Slice';
import { Link } from 'react-router-dom';

export const HighResolution = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Link to="/" className="allBooks">
        Все книги
      </Link>

      <div className="dropDownList">
        Сортировка
        <div className="sorting">
          <div className="link" onClick={() => dispatch(setSortBooks(1))}>
            По рейтингу
          </div>
          <div className="link" onClick={() => dispatch(setSortBooks(2))}>
            По цене ↑
          </div>
          <div className="link" onClick={() => dispatch(setSortBooks(3))}>
            По цене ↓
          </div>
          <div className="link" onClick={() => dispatch(setSortBooks(0))}>
            Сброс
          </div>
        </div>
      </div>

      <div className="dropDownList">
        Категории
        <div className="categories">
          <Link className="link" to="Category/businessLiterature">
            Бизнес Литература
          </Link>
          <Link className="link" to="Category/comicsManga">
            Комиксы и Макгонига
          </Link>
          <Link className="link" to="Category/detectives">
            Детективы
          </Link>
          <Link className="link" to="Category/fantasy">
            Фантастика
          </Link>
          <Link className="link" to="Category/programming">
            Программирование
          </Link>
          <Link className="link" to="Category/psychology">
            Психология
          </Link>
        </div>
      </div>

      <Link to="/Basket" className="shoppingCart">
        Корзина
      </Link>
    </>
  );
};
