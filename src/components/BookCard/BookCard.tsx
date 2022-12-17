import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchSelectedBook, fetchRecommendBooks } from '../../store/BooksInteraction/Slice';
import {
  BookDescription,
  TradeContainer,
  Delivery,
  Annotation,
  Recommendations,
  CommentForm,
  Comment,
} from './Сomponents/index';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import './Style.css';

interface MyParams {
  id: string;
}

export const BookCard = () => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const { id } = useParams<keyof MyParams>() as MyParams;

  const book = booksInteraction.selectedBook;

  React.useEffect(() => {
    dispatch(fetchSelectedBook(id));
    dispatch(fetchRecommendBooks(book?.category));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [dispatch, id, book?.category]);

  return (
    <div className="book-card-container">
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

        <Recommendations />

        <CommentForm book={book} />

        <Comment book={book} />
      </div>
    </div>
  );
};
