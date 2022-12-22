import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchSelectedBook, fetchRecommendBooks } from '../../store/booksInteraction/slice';
import {
  BookDescription,
  TradeContainer,
  Delivery,
  Annotation,
  Recommendations,
  CommentForm,
  Comment,
} from './components/index';
import { useParams } from 'react-router-dom';
import './style.css';

interface MyParams {
  id: string;
}

export const BookCard = () => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const { id } = useParams<keyof MyParams>() as MyParams;

  const book = booksInteraction.selectedBook;

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    dispatch(fetchSelectedBook(id));
    dispatch(fetchRecommendBooks(book?.category));

    setWindowWidth(window.innerWidth);

    window.scrollTo({
      top: 0,
    });
  }, [dispatch, id, book?.category]);

  return (
    <div className="book-card-container">
      {booksInteraction.status === 'loading' ? (
        <div className="book-card-container-error">Подождите идет загрузка</div>
      ) : booksInteraction.status === 'error' ? (
        <>
          <div className="book-card-container-error">Ошибка загрузка</div>
          <a
            href="https://t.me/the_bi_zi"
            className="shopping-cart-container-error"
            style={{ color: 'blue', textDecoration: 'underline' }}>
            Написать разработчику об ошибке
          </a>
        </>
      ) : (
        <>
          <div className="book-card__upper-container">
            <img className="book-card-main-image" width="10px" src={book?.imageUrl} alt="" />

            <BookDescription book={book} />

            <div className="book-card__upped-container__trade-delivery">
              <TradeContainer book={book} linkId={id} />

              <Delivery />
            </div>
          </div>

          <div className="book-card__lower-container">
            <Annotation book={book} />
            {windowWidth > 465 ? <Recommendations /> : null}
            <CommentForm book={book} />
            <Comment book={book} />
          </div>
        </>
      )}
    </div>
  );
};
