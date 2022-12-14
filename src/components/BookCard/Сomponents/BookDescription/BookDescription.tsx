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
            {Math.floor(0 + Math.random() * (1000 + 1 - 0))} оценок
          </div>
        </div>

        <div className="book-card__info-container__description__rating-area">
          <input type="radio" id="star-5" name="rating" value="5" />
          <label htmlFor="star-5" title="Оценка «5»"></label>
          <input type="radio" id="star-4" name="rating" value="4" />
          <label htmlFor="star-4" title="Оценка «4»"></label>
          <input type="radio" id="star-3" name="rating" value="3" />
          <label htmlFor="star-3" title="Оценка «3»"></label>
          <input type="radio" id="star-2" name="rating" value="2" />
          <label htmlFor="star-2" title="Оценка «2»"></label>
          <input type="radio" id="star-1" name="rating" value="1" />
          <label htmlFor="star-1" title="Оценка «1»"></label>
        </div>
      </div>
    </div>
  );
};
