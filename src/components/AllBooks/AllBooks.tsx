import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchBooks } from '../../store/Books/Slice';
import { Link } from 'react-router-dom';
import './Style.css';

export const AllBooks = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);

  const books = booksSlice?.allBooks;

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="all-books-container">
      {books.map((book) => {
        return (
          <Link key={book.id} to={`/Book/${book.id}`}>
            <div className="all-books-container__card" key={book.id}>
              <div className="all-books-container__card__background">
                <img
                  className="all-books-container__card__background-img"
                  height="10px"
                  width="10px"
                  src={book.imageUrl}
                  alt=""
                />
                <div className="all-books-container__card__info">
                  <span className="all-books-container__card__info-rating">★{book.bookRating}★</span>
                  <span className="all-books-container__card__info-price">{book.price} ₽</span>
                </div>
              </div>
              <div className="all-books-container__card-author">{book.authorName}</div>
              <div className="all-books-container__card-book-name">{book.bookName}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
