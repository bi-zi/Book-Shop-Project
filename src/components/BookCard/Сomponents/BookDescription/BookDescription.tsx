import React from 'react';
import { Books } from '../../Types';
import './Style.css';

interface MyProps {
  book: Books;
}

export const BookDescription = ({ book }: MyProps) => {
  return (
    <div className="book-card__info-container">
      <div className="book-card__info-container__title">
        {book?.bookName}
        <div className="book-card__info-container__title-author">{book?.authorName}</div>
      </div>

      <div className="book-card__info-container__description">
        <div className="book-card__info-container__description__block">
          <div className="book-card__info-container__description-star">★</div>
          <div className="book-card__info-container__description-rating">{book?.bookRating}</div>
          <div className="book-card__info-container__description-reviews">
            {book.reviewsNumber} оценок
          </div>
        </div>
      </div>
    </div>
  );
};
