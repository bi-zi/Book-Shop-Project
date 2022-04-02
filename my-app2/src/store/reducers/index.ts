import { combineReducers } from 'redux';

import { bookReducer } from './bookReducer';
import cartReducer from './reducer'

export const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>
