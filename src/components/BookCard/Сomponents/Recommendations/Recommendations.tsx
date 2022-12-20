import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Style.css';

export const Recommendations = () => {
  const recommendBooks = useAppSelector((state) => state.booksInteraction?.recommendBooks);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
  };

  return (
    <>
      {true ? (
        <div className="book-card-recommendations-container">
          <h2 className="book-card-recommendations-container__slider-name">
            {recommendBooks[0]?.categoryRu}
          </h2>

          <Slider {...settings}>
            {recommendBooks.map((book) => {
              return (
                <Link
                  className="book-card-recommendations-container-link"
                  key={book.id}
                  to={`/Book/${book.id}`}>
                  <div className={`book-card-recommendations-container__card`} key={book?.id}>
                    <div className="book-card-recommendations-container__card-background">
                      <img
                        className="book-card-recommendations-container__card-img"
                        src={book?.imageUrl}
                        alt=""
                      />
                      <div className="book-card-recommendations-container__card-info">
                        <div>★{book?.bookRating}★</div>
                        <div>{book?.price} ₽</div>
                      </div>
                    </div>

                    <div className="book-card-recommendations-container__card-author">
                      {book?.authorName}
                    </div>
                    <div className="book-card-recommendations-container__card-name">
                      {book?.bookName}
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
