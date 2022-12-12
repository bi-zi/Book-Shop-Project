import React from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../Types';
import './Style.css';

interface MyProps {
  book: Books;
  linkId: string;
}

export const TradeContainer = ({ book, linkId }: MyProps) => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="book-card__trade">
      <div className="book-card__trade-price">
        {book?.price} ₽ <div className="book-card__trade-availability">В наличии</div>
      </div>
      {0 === +linkId ? (
        <Link to="/Basket" className="book-card__trade-buy">
          <button>Перейти в корзину</button>
        </Link>
      ) : (
        <div className="book-card__trade-buy">
          <button onClick={handleClick}>Купить</button>
        </div>
      )}
    </div>
  );
};
