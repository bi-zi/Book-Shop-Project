import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { booksReducer } from './Books/Slice';
import { booksInteractionReducer } from './BooksInteraction/Slice';

export const store = configureStore({
  reducer: {
    booksSlice: booksReducer,
    booksInteraction: booksInteractionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
