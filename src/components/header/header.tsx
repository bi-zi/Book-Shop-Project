import React, { useContext, useState } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import { useGlobalEvent } from 'beautiful-react-hooks';
import './header.css';

function Header() {
  const value = useContext(Context);
  let swapSort = value.sort;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useGlobalEvent('resize', (e: any) => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="header">
      <Link to="/" className="webName">
        Book Shop
      </Link>

      <form action="" method="get">
        <input
          name="s"
          placeholder="Искать здесь..."
          className="seacrch_input"
          onChange={(e: any) => value.setSeacrh(e.target.value)}
          type="text"
        />
      </form>
      <input id="menu__toggle" type="checkbox" hidden />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      {windowWidth > 768 ? (
        <>
          <Link to="/" className="allBooks">
            Все книги
          </Link>
          <div className="dropDownList">
            Сортировка
            <div className="sorting">
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 3 ? 1 : 0)
                }>
                По рейтингу
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 1 ? 3 : 2)
                }>
                По цене ↑
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 3 || swapSort === 1 ? 2 : 3)
                }>
                По цене ↓
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 1 || swapSort === 2 || swapSort === 3 ? 0 : 0)
                }>
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
        </>
      ) : (
        <ul className="menu__box">
          <Link to="/" className="allBooks">
            Все книги
          </Link>
          <div className="dropDownList">
            Сортировка
            <div className="sorting">
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 3 ? 1 : 0)
                }>
                По рейтингу
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 2 || swapSort === 1 ? 3 : 2)
                }>
                По цене ↑
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 0 || swapSort === 3 || swapSort === 1 ? 2 : 3)
                }>
                По цене ↓
              </div>
              <div
                className="link"
                onClick={() =>
                  value.setSort(swapSort === 1 || swapSort === 2 || swapSort === 3 ? 0 : 0)
                }>
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
      )}
    </div>
  );
}

export default Header;
