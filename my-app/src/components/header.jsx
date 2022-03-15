import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <div className="webName">Book Shop</div>
        <div className="choice">Все книги</div>
        <div className="choice">Сортировка</div>
        <div className="categories">
          Категории
          <li className="submenu">
            <ul >Бизнес Литература</ul>
            <ul >Комиксы и Макгонига</ul>
            <ul >Детективы</ul>
            <ul >Фантастика</ul>
            <ul >Программирование</ul>
            <ul >Психология</ul>
          </li>
        </div>
        <div className="choice">Корзина</div>
      </div>
    </div>
  );
}

export default Header;
