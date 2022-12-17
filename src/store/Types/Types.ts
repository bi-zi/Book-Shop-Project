export type Books = {
  id: string;
  imgaeUrl: string;
  imageUrl: string;
  bookName: string;
  authorName: string;
  bookRating: string;
  price: number;
  description: string;
  category: string;
  categoryRu: string;
  numberOfBooks: number;
  reviewsNumber: number;
};

export type BookComments = {
  bookId: string;

  comments: Comment[];
};

interface Comment {
  id: string;
  nickName: string;
  title: string;
  comment: string;
  date: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'loaded',
  ERROR = 'error',
}

export interface BooksSliceState {
  allBooks: Books[];
  categoryBooks: Books[];

  sortNumber: number;
  categorySelect: string;
  status: Status;
}

export interface BooksInteractionSliceState {
  selectedBook: Books;
  recommendBooks: Books[];

  booksComments: BookComments[];
  status: Status;
}

export interface BasketSliceState {
  basketBooks: Books[];
  basketBooksId: string[];

  status: Status;
}
