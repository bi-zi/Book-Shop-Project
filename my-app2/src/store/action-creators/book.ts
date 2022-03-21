import axios from 'axios';
import { Dispatch } from 'redux';
import { BookAction, BookActionTypes } from '../../types/book';

export const fetchBooks = () => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });
      const response = await axios.get('http://localhost:3004/books');
      setTimeout(() => {
        dispatch({ type: BookActionTypes.FETCH_BOOKS_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};

export default fetchBooks
