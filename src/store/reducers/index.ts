import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer';
import cartReducer from './cartReducer';
import  commentReducer  from './commentReducer';
export const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
