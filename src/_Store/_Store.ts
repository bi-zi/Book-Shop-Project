import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { booksReducer } from './_Books/_Slice';
import { booksInteractionReducer } from './_BooksInteraction/_Slice';
import { basketReducer } from './_Basket/_Slice';

export const store = configureStore({
  reducer: {
    booksSlice: booksReducer,
    booksInteraction: booksInteractionReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
