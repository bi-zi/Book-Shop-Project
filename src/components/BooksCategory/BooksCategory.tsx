import React, { useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchCategoryBooks } from '../../store/Books/Slice';
import { Link, useParams } from 'react-router-dom';
import '../AllBooks/Style.css';

export const BooksCategory = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);
  const { name }: any = useParams();

  const books = booksSlice.categoryBooks;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(fetchCategoryBooks(name));
  }, [dispatch, name]);

  return (
    <div id="20" className="all-books-container">
      <div className="all-books-container-category-name">{books?.[0]?.categoryRu}</div>
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
