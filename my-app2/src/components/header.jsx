import React, { useContext } from 'react';
import { Context } from './context';
import { Link } from 'react-router-dom';

function Header() {
  const value = useContext(Context);

  let swapSort = value.sort;
  let swapCounter = value.counter;

  return (
    <div className="header">
      <div className="menu">
        <div className="webName" onClick={() => value.setCount((swapCounter = 1))}>
          Book Shop
        </div>
        <Link to="/" className="choice" onClick={() => value.setCount((swapCounter = 1))}>
          Все книги
        </Link>
        <div className="dropdown">
          Сортировка
          <div className="sorting">
            <div
              onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 3 ? 1 : 0)}>
              По рейтингу
            </div>
            <div
              onClick={() => value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 1 ? 3 : 2)}>
              По цене ↑
            </div>
            <div
              onClick={() => value.setSort(swapSort === 0 || swapSort === 3 || swapSort === 1 ? 2 : 3)}>
              По цене ↓
            </div>
            <div
              onClick={() => value.setSort(swapSort === 1 || swapSort === 2 || swapSort === 3 ? 0 : 0)}>
              Сброс
            </div>
          </div>
        </div>
        <div className="dropdown">
          Категории
          <Link to="/Category" className="categories">
            <div onClick={() => value.setCount((swapCounter = 2))}>Бизнес Литература</div>
            <div onClick={() => value.setCount((swapCounter = 3))}>Комиксы и Макгонига</div>
            <div onClick={() => value.setCount((swapCounter = 4))}>Детективы</div>
            <div onClick={() => value.setCount((swapCounter = 5))}>Фантастика</div>
            <div onClick={() => value.setCount((swapCounter = 6))}>Программирование</div>
            <div onClick={() => value.setCount((swapCounter = 7))}>Психология</div>
          </Link>
        </div>
        <div className="choice">Корзина</div>
      </div>
    </div>
  );
}

export default Header;
