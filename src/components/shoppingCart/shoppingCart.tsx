import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchBasketBooks, setBasketDeleteAll } from '../../store/Basket/Slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Book } from './Book/Book';
import './Style.css';

export const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket);

  const books = [...basket.basketBooks].sort(
    (a, b) => basket.basketBooksId.indexOf(a.id) - basket.basketBooksId.indexOf(b.id),
  );

  const booksCount = books.length;

  const totalPrice = books.reduce((total, book) => (total += book.price * book.numberOfBooks), 0);

  React.useEffect(() => {
    dispatch(fetchBasketBooks(basket.basketBooksId));
  }, [dispatch, basket.basketBooksId]);

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-container__info">
        <div className="shopping-cart-container__info-quantity">Корзина: {booksCount}</div>

        {booksCount > 0 ? (
          <div className="shopping-cart-container__info-total-price">Общая цена {totalPrice} ₽</div>
        ) : null}

        <div
          className="shopping-cart-container__info-remove-all"
          onClick={() => dispatch(setBasketDeleteAll())}>
          <FontAwesomeIcon className="shopping-cart-container__info-remove-all-icon" icon={faTrashCan} />
          <span>Удалить все товары</span>
        </div>
      </div>

      <div className="shopping-cart-container__book">
        {booksCount === 0 ? (
          <div className="shopping-cart-container__book-empty">Ваша корзина пуста</div>
        ) : null}

        {books.map((book, index) => (
          <Book book={book} index={index} key={book.id} />
        ))}
      </div>
    </div>
  );
};
