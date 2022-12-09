import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchSelectedBook, fetchRecommendBooks } from '../../store/Books/Slice';
import {
  BookDescription,
  TradeContainer,
  Delivery,
  Annotation,
  Recommendations,
  Comments,
} from './Сomponents/index';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';

import './Style.css';

interface MyParams {
  id: string;
}

export const BookCard = () => {
  const dispatch = useAppDispatch();
  const booksSlice = useAppSelector((state) => state.booksSlice);

  const { id } = useParams<keyof MyParams>() as MyParams;

  const book = booksSlice.selectedBook;
  const recommendBooks = booksSlice.recommendBooks;

  const [nameComment, setNameComment] = React.useState('');
  const [titleComment, setTitleComment] = React.useState('');
  const [textComment, setTextComment] = React.useState('');
  const [writeСomment, setWriteСomment] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const [comId, setComId] = React.useState(id);

  React.useEffect(() => {
    dispatch(fetchSelectedBook(id));
    dispatch(fetchRecommendBooks(book?.category));
  }, [dispatch, id, book?.category]);

  return (
    <div className="book_page_container">
      <img className="main_image" src={book?.imageUrl} alt="" />

      <BookDescription book={book} />

      <TradeContainer book={book} linkId={id} />

      <Delivery />

      <Annotation book={book} />

      <Recommendations />

      <Comments />
    </div>
  );
};
