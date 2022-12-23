import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Books, BooksSliceState, Status } from '../types/types';

export const fetchBooks = createAsyncThunk<Books[], number>('allBooks/fetchBooks', async (count) => {

  const { data } = await axios.get<Books[]>(`/allBooks/${count}`);
  return data;
});

export const fetchCategoryBooks = createAsyncThunk<Books[], { category: string; count: number }>(
  'categoryBooks/fetchCategoryBooks',
  async ({ category, count }: { category: string; count: number }) => {
    const { data } = await axios.get<Books[]>(
      `/${category}/${count}`,
    );
    return data;
  },
);

export const fetchFindBooks = createAsyncThunk<Books[], { category: string; bookName: string }>(
  'findBooks/fetchFindBooks',
  async ({ category, bookName }: { category: string; bookName: string }) => {
    const { data } = await axios.get<Books[]>(
      `/findBooks/${category}/${bookName}`,
    );
    return data;
  },
);

const initialState: BooksSliceState = {
  allBooks: [],
  categoryBooks: [],

  sortNumber: -1,
  categorySelect: '',

  findBooks: { name: '', category: '' },

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
      }
    },

    setClearBooks: (state) => {
      state.allBooks = [];
      state.categoryBooks = [];
    },

    setFindBooks: (state, action) => {
      state.findBooks.name = action.payload.name;
      state.findBooks.category = action.payload.category;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.allBooks.push(...action.payload);
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchCategoryBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCategoryBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.categoryBooks.push(...action.payload);
    });
    builder.addCase(fetchCategoryBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });

    builder.addCase(fetchFindBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchFindBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (state.findBooks.category !== 'allBooks') {
        state.categoryBooks = action.payload;
      } else if (state.findBooks.category === 'allBooks') {
        state.allBooks = action.payload;
      }
    });
    builder.addCase(fetchFindBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setSortBooks, setClearBooks, setFindBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
