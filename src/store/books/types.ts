export type Books = {
  id: number;
  imgaeUrl: string;
  imageUrl: string;
  bookName: string;
  authorName: string;
  bookRating: string;
  price: number;
  description: string;
  category: string;
  categoryRu: string;
  reviewsNumber: number;
};

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
