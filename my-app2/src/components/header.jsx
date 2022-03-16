import React from 'react';

function Header() {


  return (
    <div className="header">
      <div className="menu">
        <div className="webName">Book Shop</div>
        <div className="choice">Все книги</div>
        <div className="dropdown">
          Сортировка
          <div className="sorting">
            <a href="/#">По рейтингу</a>
            <a href="/#">По жанрам</a>
            <a href="/#">По цене</a>
          </div>
        </div>
        <div className="dropdown">
          Категории
          <div className="categories">
            <a href="/0">Бизнес Литература</a>
            <a href="/1">Комиксы и Макгонига</a>
            <a href="/2">Детективы</a>
            <a href="/3">Фантастика</a>
            <a href="/4">Программирование</a>
            <a href="/5">Психология</a>
          </div>
        </div>
        <div className="choice">Корзина</div>
      </div>
    </div>
  );
}

export default Header;
