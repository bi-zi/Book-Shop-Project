import React, { useEffect, useContext } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import './bookList.css';

function BookList() {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();
  const value = useContext(Context);

  let stackOfBooks = books.sort(() => Math.random() - 0.5);
  let pageNumber = value.page;
  let sortNumber = value.sort;

  if (sortNumber === 1) {
    stackOfBooks.sort((a, b) => (a.bookRating < b.bookRating ? 1 : -1));
  }

  if (pageNumber && (sortNumber === 2 || sortNumber === 3)) {
    sortNumber === 2
      ? stackOfBooks.sort((a, b) => (a.price < b.price ? 1 : -1))
      : stackOfBooks.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="book_list_container">
      {stackOfBooks.map((book) => {
        return (
          <Link key={book.id} to={`/Book/${book.id}`}>
            <div className="book_card" key={book.id}>
              <div className="card_settings">
                <img height="310px" width="200px" src={book.imageUrl} alt="" />
                <div className="card_info">
                  <div className="rating">★{book.bookRating}★</div>
                  <div className="price">{book.price} ₽</div>
                </div>
              </div>
              <div className="card_author">{book.authorName}</div>
              <div className="card_name">{book.bookName}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BookList;
