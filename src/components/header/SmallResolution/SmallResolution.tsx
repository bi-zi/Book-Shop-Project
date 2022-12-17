import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/Store';
import { setSortBooks } from '../../../store/Books/Slice';
import { Link } from 'react-router-dom';

export const SmallResolution = () => {
  return (
    <ul className="menu__box">
      <Link to="/" className="allBooks">
        Все книги
      </Link>
      <div className="dropDownList">
        Сортировка
        <div className="sorting">
          <div className="link" onClick={() => 1}>
            По рейтингу
          </div>
          <div className="link" onClick={() => 1}>
            По цене ↑
          </div>
          <div className="link" onClick={() => 1}>
            По цене ↓
          </div>
          <div className="link" onClick={() => 1}>
            Сброс
          </div>
        </div>
      </div>
      <div className="dropDownList">
        Категории
        <div className="categories">
          <Link className="link" to="Category/Business_literature">
            Бизнес Литература
          </Link>
          <Link className="link" to="Category/Comics_manga">
            Комиксы и Макгонига
          </Link>
          <Link className="link" to="Category/Detectives">
            Детективы
          </Link>
          <Link className="link" to="Category/Fantasy">
            Фантастика
          </Link>
          <Link className="link" to="Category/Programming">
            Программирование
          </Link>
          <Link className="link" to="Category/Psychology">
            Психология
          </Link>
        </div>
      </div>
      <Link to="/Basket" className="shoppingCart">
        Корзина
      </Link>
    </ul>
  );
}
