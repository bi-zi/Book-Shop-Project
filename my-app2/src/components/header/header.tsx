import React, { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const value = useContext(Context);
  let swapSort = value.sort;

  return (
    <div className="header">
      <Link to="/" className="webName">
        Book Shop
      </Link>
      <Link to="/" className="allBooks">
        Все книги
      </Link>
      <div className="dropDownList">
        Сортировка
        <div className="sorting">
          <div
            className="link"
            onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 3 ? 1 : 0)}>
            По рейтингу
          </div>
          <div
            className="link"
            onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 1 ? 3 : 2)}>
            По цене ↑
          </div>
          <div
            className="link"
            onClick={() => value.setSort(swapSort === 0 || swapSort === 3 || swapSort === 1 ? 2 : 3)}>
            По цене ↓
          </div>
          <div
            className="link"
            onClick={() => value.setSort(swapSort === 1 || swapSort === 2 || swapSort === 3 ? 0 : 0)}>
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
    </div>
  );
}

export default Header;
