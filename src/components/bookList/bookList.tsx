import React, { useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchBooks } from '../../store/books/slice';
import { Link } from 'react-router-dom';
import './bookList.css';

function BookList() {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);

  const books = booksSlice?.allBooks;
  console.log(booksSlice)

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  // if (loading) {
  //   return <h1>Идет загрузка...</h1>;
  // }
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <div className="book_list_container">
      {books.map((book) => {
        return (
          <Link key={book.id} to={`/Book/${book.id}`} >
            <div className="book_list_card" key={book.id}>
              <div className="card_list_settings">
                <img className="card_img" height="310px" width="200px" src={book.imageUrl} alt="" />
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
}

export default BookList;
