import React, { useEffect, useContext } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Context } from '../context';
import { Link, useParams } from 'react-router-dom';
import './categorySelection.css';

function Category() {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();
  const value = useContext(Context);
  const { name } = useParams();

  let stackOfBooks = books.sort(() => Math.random() - 0.5);
  let sortNumber = value.sort;
  let pageNumber = 0;
  let categoryСheck = '';

  if (name === 'Business_literature') {
    pageNumber = 2;
    categoryСheck = 'business literature';
  }
  if (name === 'Comics_manga') {
    pageNumber = 3;
    categoryСheck = 'comics manga';
  }
  if (name === 'Detectives') {
    pageNumber = 4;
    categoryСheck = 'detectives';
  }
  if (name === 'Fantasy') {
    pageNumber = 5;
    categoryСheck = 'fantasy';
  }
  if (name === 'Programming') {
    pageNumber = 6;
    categoryСheck = 'programming';
  }
  if (name === 'Psychology') {
    pageNumber = 7;
    categoryСheck = 'psychology';
  }

  if (pageNumber > 1 || (sortNumber === 1 && pageNumber > 0)) {
    stackOfBooks = books.filter((book) => Object.values(book)[8] === categoryСheck);
    if (sortNumber === 1) {
      stackOfBooks.sort((a, b) => (a.bookRating < b.bookRating ? 1 : -1));
    }
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
    <div id="20" className="category_list_container">
      <div className="category_name"></div>
      {stackOfBooks.map((book) => {
        return (
          <Link key={book.id} to={`/Book/${book.id}`}>
            <div className="category_card" key={book.id}>
              <div className="category_card_settings">
                <img height="310px" width="200px" src={book.imageUrl} alt="" />
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
