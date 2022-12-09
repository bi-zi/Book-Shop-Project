import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Books, BooksSliceState, Status } from './Types';

export const fetchBooks = createAsyncThunk('allBooks/fetchBooks', async () => {
  const { data } = await axios.get<Books[]>('http://localhost:4444/allBooks');
  return data;
});
export const fetchCategoryBooks = createAsyncThunk<Books[], string>(
  'categoryBooks/fetchCategoryBooks',
  async (category) => {
    const { data } = await axios.get<Books[]>(`http://localhost:4444/${category}`);
    return data;
  },
);

export const fetchSelectedBook = createAsyncThunk<Books, string>(
  'selectedBook/fetchSelectedBook',
  async (selectedBookId) => {
    const { data } = await axios.get<Books>(`http://localhost:4444/selectedBook/${selectedBookId}`);
    return data;
  },
);

export const fetchRecommendBooks = createAsyncThunk<Books[], string>(
  'recommendBooks/fetchRecommendBooks',
  async (booksCategory) => {
    const { data } = await axios.get<Books[]>(`http://localhost:4444/recommendBooks/${booksCategory}`);
    return data;
  },
);

const initialState: BooksSliceState = {
  allBooks: [],
  categoryBooks: [],
  selectedBook: {} as Books,
  recommendBooks: [],

  sortNumber: -1,
  categorySelect: '',
  status: Status.LOADING,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSortBooks: (state, action) => {
      if (action.payload === 1) {
        state.allBooks = state.allBooks.sort((a, b) => (a.bookRating < b.bookRating ? 1 : -1));
        state.categoryBooks = state.categoryBooks.sort((a, b) => (a.bookRating < b.bookRating ? 1 : -1));
        state.sortNumber = 1;
      }
      if (action.payload === 2) {
        state.allBooks = state.allBooks.sort((a, b) => (a.price < b.price ? 1 : -1));
        state.categoryBooks = state.categoryBooks.sort((a, b) => (a.price < b.price ? 1 : -1));
        state.sortNumber = 2;
      }
      if (action.payload === 3) {
        state.allBooks = state.allBooks.sort((a, b) => (a.price > b.price ? 1 : -1));
        state.categoryBooks = state.categoryBooks.sort((a, b) => (a.price > b.price ? 1 : -1));

        state.sortNumber = 3;
      } else if (action.payload === 0) {
        state.allBooks = state.allBooks.sort(() => Math.random() - 0.5);
        state.categoryBooks = state.categoryBooks.sort(() => Math.random() - 0.5);
        state.sortNumber = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.allBooks = [...action.payload].sort(() => Math.random() - 0.5) as Books[];
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchCategoryBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCategoryBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.categoryBooks = [...action.payload].sort(() => Math.random() - 0.5);
    });
    builder.addCase(fetchCategoryBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchSelectedBook.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchSelectedBook.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.selectedBook = action.payload;
    });
    builder.addCase(fetchSelectedBook.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchRecommendBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchRecommendBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.recommendBooks = action.payload;
    });
    builder.addCase(fetchRecommendBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setSortBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
