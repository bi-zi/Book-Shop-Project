import React, { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  const value = useContext(Context);
  let swapSort = value.sort;
  let pageSelection = value.page;

  return (
    <div className="header">
      <Link to="/" className="webName" onClick={() => value.setPage((pageSelection = 1))}>
        Book Shop
      </Link>
      <Link to="/" className="allBooks" onClick={() => value.setPage((pageSelection = 1))}>
        Все книги
      </Link>
      <div className="dropDownList">
        Сортировка
        <div className="sorting">
          <div onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 3 ? 1 : 0)}>
            По рейтингу
          </div>
          <div onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 1 ? 3 : 2)}>
            По цене ↑
          </div>
          <div onClick={() => value.setSort(swapSort === 0 || swapSort === 3 || swapSort === 1 ? 2 : 3)}>
            По цене ↓
          </div>
          <div onClick={() => value.setSort(swapSort === 1 || swapSort === 2 || swapSort === 3 ? 0 : 0)}>
            Сброс
          </div>
        </div>
      </div>
      <div className="dropDownList">
        Категории
        <Link to="/Category" className="categories">
          <div onClick={() => value.setPage((pageSelection = 2))}>Бизнес Литература</div>
          <div onClick={() => value.setPage((pageSelection = 3))}>Комиксы и Макгонига</div>
          <div onClick={() => value.setPage((pageSelection = 4))}>Детективы</div>
          <div onClick={() => value.setPage((pageSelection = 5))}>Фантастика</div>
          <div onClick={() => value.setPage((pageSelection = 6))}>Программирование</div>
          <div onClick={() => value.setPage((pageSelection = 7))}>Психология</div>
        </Link>
      </div>
      <Link to="/Basket" className="shoppingCart">
        Корзина
      </Link>
    </div>
  );
}

export default Header;
