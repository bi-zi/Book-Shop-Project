import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { setBasketBooksId } from '../../../../store/basket/slice';

import { Link } from 'react-router-dom';
import { Books } from '../../types';
import './style.css';

interface MyProps {
  book: Books;
  linkId: string;
}

export const TradeContainer = ({ book, linkId }: MyProps) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket);

  const bookInBasket = basket.basketBooksId.find((item) => item === book.id) !== undefined;

  return (
    <div className="book-card__trade">
      <div className="book-card__trade-price">
        {book?.price} ₽ <div className="book-card__trade-availability">В наличии</div>
      </div>
      {bookInBasket ? (
        <Link to="/Basket" className="book-card__trade-buy">
          <button>Перейти в корзину</button>
        </Link>
      ) : (
        <div className="book-card__trade-buy">
          <button onClick={() => dispatch(setBasketBooksId(book.id))}>Купить</button>
        </div>
      )}
    </div>
  );
};
