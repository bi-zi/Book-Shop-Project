export interface BookState {
  books: any[];
  loading: boolean;
  error: null | string;
}

export enum BookActionTypes {
  FETCH_BOOKS = 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
}

interface FetchBooksAction {
  type: BookActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BookActionTypes.FETCH_BOOKS_SUCCESS;
  payload: any[];
}

interface FetchBooksErrorAction {
  type: BookActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

export type BookAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction;
