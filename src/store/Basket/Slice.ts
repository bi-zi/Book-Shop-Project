import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Books, BasketSliceState, Status } from '../types/types';

export const fetchBasketBooks = createAsyncThunk<Books[], string[]>(
  'basketBooks/fetchBasketBooks',
  async (id) => {
    const { data } = await axios.get<Books[]>(`http://localhost:4444/basketBooks/${id}`);
    return data;
  },
);

const initialState: BasketSliceState = {
  basketBooks: [],
  basketBooksId: [],

  status: Status.LOADING,
};

const Basket = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBasketBooksId: (state, action) => {
      state.basketBooksId.push(action.payload);
    },
    setBasketDeleteBook: (state, action) => {
      state.basketBooks.splice(action.payload, 1);

      state.basketBooksId.splice(action.payload, 1);
    },
    setBasketDeleteAll: (state) => {
      state.basketBooks = [];
      state.basketBooksId = [];
    },
    setNumberOfBooksPlus: (state, action) => {
      const index = state.basketBooks.findIndex((book) => book.id === action.payload);

      state.basketBooks[index].numberOfBooks += 1;
    },
    setNumberOfBooksMinus: (state, action) => {
      const index = state.basketBooks.findIndex((book) => book.id === action.payload);

      state.basketBooks[index].numberOfBooks -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBasketBooks.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBasketBooks.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.basketBooks = action.payload;
    });
    builder.addCase(fetchBasketBooks.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const {
  setBasketBooksId,
  setBasketDeleteBook,
  setBasketDeleteAll,
  setNumberOfBooksPlus,
  setNumberOfBooksMinus,
} = Basket.actions;
export const basketReducer = Basket.reducer;
