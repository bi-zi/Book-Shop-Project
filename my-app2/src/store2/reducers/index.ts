import { combineReducers } from 'redux';
import { bookReducer } from './bookReducer/bookReducer';
import cartReducer from './cartReducer/cartReducer';
import  commentReducer  from './commentReducer/commentReducer';
export const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
