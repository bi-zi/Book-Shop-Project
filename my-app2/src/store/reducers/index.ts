import { combineReducers } from 'redux';

import { bookReducer } from './bookReducer';
import cartReducer from './cart.reducers'

export const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>
