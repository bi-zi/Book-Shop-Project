import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { booksReducer } from './books/slice';
import { booksInteractionReducer } from './booksInteraction/slice';
import { basketReducer } from './basket/slice';

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
