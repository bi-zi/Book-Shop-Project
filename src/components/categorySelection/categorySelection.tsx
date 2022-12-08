import React, { useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchCategoryBooks } from '../../store/books/slice';
import { Link, useParams } from 'react-router-dom';
import './categorySelection.css';

function Category() {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);
  const { name }: any = useParams();

  const books = booksSlice.categoryBooks;

  useEffect(() => {
    dispatch(fetchCategoryBooks(name));
  }, [dispatch, name]);

  // if (loading) {
  //   return <h1>Идет загрузка...</h1>;
  // }
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

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
}

export default Category;
