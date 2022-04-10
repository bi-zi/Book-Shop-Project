import * as BookActionCreators from './book'
import * as CartActionCreators from './cart';


export default {
  ...BookActionCreators,
  ...CartActionCreators,
};
