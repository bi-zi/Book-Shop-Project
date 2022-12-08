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

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'loaded',
  ERROR = 'error',
}

export interface BooksSliceState {
  allBooks: Books[];
  categoryBooks: Books[];
  selectedBook: Books;
  sortNumber: number;
  categorySelect: string;
  status: Status;
}
