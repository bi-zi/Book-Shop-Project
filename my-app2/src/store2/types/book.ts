export interface BookState {
  books: {
    [index: number]: {
      id: number;
      counter: number;
      imgaeUrl: string;
      bookName: string;
      authorName: string;
      bookRating: string;
      price: number;
      description: string;
      category: string;
      categoryRu: string;
    };
  };
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
