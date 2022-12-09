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
    <div className="trade_container">
      <div className="book_price">
        {book?.price} ₽ <div className="availability">В наличии</div>
      </div>
      {0 === +linkId ? (
        <Link to="/Basket" className="book_buy">
          <button>Перейти в корзину</button>
        </Link>
      ) : (
        <div className="book_buy">
          <button onClick={handleClick}>Купить</button>
        </div>
      )}

      <div className="book_marks">
        <button>В закладки</button>
      </div>
    </div>
  );
};
