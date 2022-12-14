import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './Style.css';

export const Recommendations = () => {
  const dispatch = useAppDispatch();
  const recommendBooks = useAppSelector((state) => state.booksInteraction?.recommendBooks);

  const [nameComment, setNameComment] = React.useState('');
  const [titleComment, setTitleComment] = React.useState('');
  const [textComment, setTextComment] = React.useState('');

  const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
  };

  const handlerScrollUp = () => {
    setTextComment('');
    setNameComment('');
    setTitleComment('');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
                    to={`/Book/${book.id}`}
                    onClick={handlerScrollUp}>
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
