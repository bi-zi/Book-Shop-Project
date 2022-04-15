import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer/bookReducer';
import cartReducer from './cartReducer/cartReducer';

export const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
