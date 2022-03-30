import React, { useEffect, useContext } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { Context } from '../components/context';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();
  const value = useContext(Context);
  let sortValue = value.sort;
  let counterValue = value.counter;
  let stackOfBooks = books.sort(() => Math.random() - 0.5);
  let categoryСheck = '';

  counterValue === 2
    ? (categoryСheck = 'business literature')
    : counterValue === 3
    ? (categoryСheck = 'comics manga')
    : counterValue === 4
    ? (categoryСheck = 'detectives')
    : counterValue === 5
    ? (categoryСheck = 'fantasy')
    : counterValue === 6
    ? (categoryСheck = 'programming')
    : (categoryСheck = 'psychology');

  if (counterValue > 1 || (sortValue === 1 && counterValue > 1)) {
    stackOfBooks = books.filter((book) => Object.values(book)[7] === categoryСheck);
    if (sortValue === 1) {
      stackOfBooks.sort((a, b) => (a.bookRating < b.bookRating ? 1 : -1));
    }
  }

  if (counterValue && (sortValue === 2 || sortValue === 3)) {
    sortValue === 2
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
    <div id="20" className="booksContainer">
      <div className="categoryName">

      </div>
      <div className="line">
        {stackOfBooks.map((book) => {
          return (
            <Link key={book.id} to={`/Book/${book.id}`}>
              <div className="book0" key={book.id}>
                <div className="imageSettings">
                  <img height="310px" width="200px" src={book.imageUrl} alt="" />
                  <div className="info">
                    <div className="rating">★{book.bookRating}★</div>
                    <div className="price">{book.price} ₽</div>
                  </div>
                </div>
                <div className="author">{book.authorName}</div>
                <div className="bookName">{book.bookName}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
