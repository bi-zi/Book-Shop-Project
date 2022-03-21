import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { bookReducer } from './bookReducer';

export const rootReducer = combineReducers({
  book: bookReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>
