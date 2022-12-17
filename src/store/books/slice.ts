import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Books, BooksSliceState, Status } from '../Types/Types';

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

const initialState: BooksSliceState = {
  allBooks: [],
  categoryBooks: [],

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
        state.allBooks = state.allBooks;
        state.categoryBooks = state.categoryBooks;
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
      state.allBooks = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchCategoryBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCategoryBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.categoryBooks = action.payload;
    });
    builder.addCase(fetchCategoryBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setSortBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
