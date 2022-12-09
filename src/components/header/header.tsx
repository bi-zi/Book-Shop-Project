import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { setSortBooks } from '../../store/Books/Slice';
import { Link } from 'react-router-dom';
import './Style.css';

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <Link to="/" className="webName">
        Book Shop
      </Link>

      <form action="" method="get">
        <input name="s" placeholder="Искать здесь..." className="seacrch_input" type="text" />
      </form>
      <input id="menu__toggle" type="checkbox" hidden />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      {2005 > 768 ? (
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
      ) : (
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
      )}
    </div>
  );
};
