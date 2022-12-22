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

  console.log(books);

  React.useEffect(() => {
    if(basket.basketBooksId.length > 0) dispatch(fetchBasketBooks(basket.basketBooksId));

    window.scrollTo({
      top: 0,
    });
  }, [dispatch, basket.basketBooksId]);

  console.log(basket.status === 'error', basket.basketBooksId.length !== 0, booksCount === 0);

  return (
    <div className="shopping-cart-container">
      {basket.status === 'loading' && basket.basketBooksId.length !== 0 ? (
        <div className="shopping-cart-container-error">Подождите идет загрузка</div>
      ) : basket.status === 'error' && basket.basketBooksId.length !== 0 && booksCount === 0 ? (
        <>
          <div className="books-container-category-name">Ошибка загрузка</div>
          <a
            href="https://t.me/the_bi_zi"
            className="shopping-cart-container-error"
            style={{ color: 'blue', textDecoration: 'underline' }}>
            Написать разработчику об ошибке
          </a>
        </>
      ) : (
        <>
          <div className="shopping-cart-container__info">
            <div className="shopping-cart-container__info-quantity">Корзина: {booksCount}</div>

            {booksCount > 0 ? (
              <div className="shopping-cart-container__info-total-price">Общая цена {totalPrice} ₽</div>
            ) : null}

            <div
              className="shopping-cart-container__info-remove-all"
              onClick={() => dispatch(setBasketDeleteAll())}>
              <FontAwesomeIcon
                className="shopping-cart-container__info-remove-all-icon"
                icon={faTrashCan}
              />
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
        </>
      )}
    </div>
  );
};
