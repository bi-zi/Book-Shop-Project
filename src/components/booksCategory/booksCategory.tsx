import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchCategoryBooks, setClearBooks, setFindBooks } from '../../store/books/slice';
import { Link, useParams } from 'react-router-dom';
import '../allBooks/style.css';

interface MyParams {
  name: string;
}

export const BooksCategory = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);

  const { name } = useParams<keyof MyParams>() as MyParams;

  const books = booksSlice.categoryBooks;

  const pagination = books.length === 0 ? 20 : books.length + 20;

  React.useEffect(() => {
    dispatch(setClearBooks());
    dispatch(fetchCategoryBooks({ category: name, count: 20 }));

    window.scrollTo({
      top: 0,
    });
  }, [dispatch, name]);

  return (
    <div id="20" className="books-container">
      <div className="books-container-category-name">{books?.[0]?.categoryRu}</div>
      {books.map((book) => {
        return (
          <Link
            key={book.id}
            to={`/Book/${book.id}`}
            onClick={() => dispatch(setFindBooks({ name: '', category: '' }))}>
            <div className="books-container__card">
              <div className="books-container__card__background">
                <img
                  className="books-container__card__background-img"
                  height="10px"
                  width="10px"
                  src={book.imageUrl}
                  alt=""
                />
                <div className="books-container__card__info">
                  <span className="books-container__card__info-rating">★{book.bookRating}★</span>
                  <span className="books-container__card__info-price">{book.price} ₽</span>
                </div>
              </div>
              <div className="books-container__card-author">{book.authorName}</div>
              <div className="books-container__card-book-name">{book.bookName}</div>
            </div>
          </Link>
        );
      })}
      {books?.length < 39 && booksSlice.findBooks.name.length === 0 && books.length !== 0 ? (
        <>
          <br />
          <button
            className="books-container-pagination"
            onClick={() => dispatch(fetchCategoryBooks({ category: name, count: pagination }))}>
            ЕЩЁ
          </button>
        </>
      ) : books?.length === 0 && booksSlice.findBooks.name.length > 0 ? (
        <div className="books-container-not-found">Книги не найдены</div>
      ) : (
        ''
      )}

      {booksSlice.status === 'loading' ? (
        <div className="books-container-category-name">Подождите идет загрузка</div>
      ) : booksSlice.status === 'error' ? (
        <>
          <div className="books-container-category-name">Ошибка загрузка</div>
          <a
            href="https://t.me/the_bi_zi"
            className="books-container-category-name"
            style={{ color: 'blue', textDecoration: 'underline' }}>
            Написать разработчику об ошибке
          </a>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
