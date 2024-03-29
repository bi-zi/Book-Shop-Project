import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Books, BooksInteractionSliceState, Status } from '../types/types';

export const fetchSelectedBook = createAsyncThunk<Books, string>(
  'selectedBook/fetchSelectedBook',
  async (selectedBookId) => {
    const { data } = await axios.get<Books>(`/selectedBook/${selectedBookId}`);
    return data;
  },
);

export const fetchRecommendBooks = createAsyncThunk<Books[], string>(
  'recommendBooks/fetchRecommendBooks',
  async (booksCategory) => {
    const { data } = await axios.get<Books[]>(`/recommendBooks/${booksCategory}`);
    return data;
  },
);

const initialState: BooksInteractionSliceState = {
  selectedBook: {} as Books,
  recommendBooks: [],

  booksComments: [],

  status: Status.LOADING,
};

const booksInteraction = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksCommentsСreate: (state, action) => {
      state.booksComments.push(action.payload);
    },
    setBooksCommentsPush: (state, action) => {
      state.booksComments
        .find((book) => book.bookId === action.payload.bookId)
        ?.comments.unshift(action.payload.comments[0]);
    },
    setBooksCommentsDelete: (state, action) => {
      const bookIndex = state.booksComments.findIndex((book) => book.bookId === action.payload.book);

      state.booksComments[bookIndex].comments.splice(action.payload.commentIndex!, 1);
    },
    setBooksCommentsChange: (state, action) => {
      const bookIndex = state.booksComments.findIndex((book) => book.bookId === action.payload.book);
      state.booksComments[bookIndex].comments.splice(
        action.payload.commentIndex!,
        1,
        action.payload.comment,
      );
    },
  },
  extraReducers: (builder) => {
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

export const {
  setBooksCommentsСreate,
  setBooksCommentsPush,
  setBooksCommentsDelete,
  setBooksCommentsChange,
} = booksInteraction.actions;
export const booksInteractionReducer = booksInteraction.reducer;
