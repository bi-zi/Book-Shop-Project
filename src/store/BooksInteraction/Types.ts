export type Books = {
  id: number;
  counter: number;
  imgaeUrl: string;
  imageUrl: string;
  bookName: string;
  authorName: string;
  bookRating: string;
  price: number;
  description: string;
  category: string;
  categoryRu: string;
};

export type BookComments = {
  bookId: number;

  comments: Comment[];
};

interface Comment {
  id: string
  nickName: string;
  title: string;
  comment: string;
  date: Date
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'loaded',
  ERROR = 'error',
}

export interface BooksInteractionSliceState {
  selectedBook: Books;
  recommendBooks: Books[];

  booksComments: BookComments[];
  status: Status;
}
