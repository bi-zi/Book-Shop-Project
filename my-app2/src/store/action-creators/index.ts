import * as BookActionCreators from './book'
import * as TodoActionCreators from './todo';

export default {
  ...BookActionCreators,
  ...TodoActionCreators,
};
