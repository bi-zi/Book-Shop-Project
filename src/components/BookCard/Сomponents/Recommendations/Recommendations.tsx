import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './Style.css';

export const Recommendations = () => {
  const dispatch = useAppDispatch();
  const recommendBooks = useAppSelector((state) => state.booksSlice?.recommendBooks);

  const [nameComment, setNameComment] = React.useState('');
  const [titleComment, setTitleComment] = React.useState('');
  const [textComment, setTextComment] = React.useState('');

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
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
      {2000 > 460 ? (
        <div className="recommendations">
          <h2 className="slider_name">{recommendBooks[0]?.categoryRu}</h2>

          <Slider {...settings}>
            {recommendBooks.map((book) => {
              return (
                <Link
                  className="slider_link"
                  key={book.id}
                  to={`/Book/${book.id}`}
                  onClick={handlerScrollUp}>
                  <div className={`slider_book ${0}`} key={book?.id}>
                    <div className="slider_card_settings">
                      <img
                        className="slider_img"
                        height="250px"
                        width="150px"
                        src={book?.imageUrl}
                        alt=""
                      />
                      <div className="slider_card_info">
                        <div className="slider_rating">★{book?.bookRating}★</div>
                        <div className="slider_price">{book?.price} ₽</div>
                      </div>
                    </div>
                    <div className="slider_book_author">{book?.authorName}</div>
                    <div className="slider_book_name">{book?.bookName}</div>
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
