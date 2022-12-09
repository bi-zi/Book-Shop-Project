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
                  height="310px"
                  width="200px"
                  src={book.imageUrl}
                  alt=""
                />
                <div className="card_list_info">
                  <div className="rating">★{book.bookRating}★</div>
                  <div className="price">{book.price} ₽</div>
                </div>
              </div>
              <div className="card_list_author">{book.authorName}</div>
              <div className="card_list_name">{book.bookName}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
