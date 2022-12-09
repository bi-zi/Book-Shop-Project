import React, { useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchCategoryBooks } from '../../store/Books/Slice';
import { Link, useParams } from 'react-router-dom';
import './Style.css';

export const BooksCategory = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);
  const { name }: any = useParams();

  const books = booksSlice.categoryBooks;

  useEffect(() => {
    dispatch(fetchCategoryBooks(name));
  }, [dispatch, name]);

  return (
    <div id="20" className="category_list_container">
      <div className="category_name"></div>
      {books.map((book) => {
        return (
          <Link key={book.id} to={`/Book/${book.id}`}>
            <div className="category_card" key={book.id}>
              <div className="category_card_settings">
                <img className="category_img" height="310px" width="200px" src={book.imageUrl} alt="" />
                <div className="category_card_info">
                  <div className="rating">★{book.bookRating}★</div>
                  <div className="price">{book.price} ₽</div>
                </div>
              </div>
              <div className="category_card_author">{book.authorName}</div>
              <div className="category_card_name">{book.bookName}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
