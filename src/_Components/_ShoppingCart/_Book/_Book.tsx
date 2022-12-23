import React from 'react';
import { useAppDispatch } from '../../../_Store/_Store';
import {
  setBasketDeleteBook,
  setNumberOfBooksPlus,
  setNumberOfBooksMinus,
} from '../../../_Store/_Basket/_Slice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Books } from './_Type';
import './_Style.css';

interface MyProps {
  book: Books;
  index: number;
}

export const Book = ({ book, index }: MyProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="shopping-cart-container__book__cart">
      <Link to={`/Book/${book.id}`}>
        <img
          className="shopping-cart-container__book__cart-img"
          height="10px"
          width="150px"
          src={book.imageUrl}
          alt=""
        />
      </Link>

      <Link className="shopping-cart-container__book__cart__info" to={`/Book/${book.id}`}>
        <div className="shopping-cart-container__book__cart__info-name">{book.bookName}</div>
        <div className="shopping-cart-container__book__cart__info-author">{book.authorName}</div>
      </Link>

      <div className="shopping-cart-container__book__cart__counter">
        {book.numberOfBooks > 1 ? (
          <button
            className="shopping-cart-container__book__cart__counter-minus"
            onClick={() => dispatch(setNumberOfBooksMinus(book.id))}>
            —
          </button>
        ) : (
          <button className="shopping-cart-container__book__cart__counter-minus">—</button>
        )}
        <div className="shopping-cart-container__book__cart__counter-number">{book.numberOfBooks}</div>
        <button
          className="shopping-cart-container__book__cart__counter-plus"
          onClick={() => dispatch(setNumberOfBooksPlus(book.id))}>
          +
        </button>
      </div>

      <div className="shopping-cart-container__book__cart__cost">
        <div className="shopping-cart-container__book__cart__cost-price">
          {book?.price * book?.numberOfBooks} ₽
        </div>
        <div className="shopping-cart-container__book__cart__cost-multiplication">
          {book?.price} ₽ x {book.numberOfBooks}шт
        </div>
      </div>

      <div
        className="shopping-cart-container__book__cart-remove"
        onClick={() => dispatch(setBasketDeleteBook(index))}>
        <FontAwesomeIcon icon={faTrashCan} />
        <div>Удалить</div>
      </div>
    </div>
  );
};
