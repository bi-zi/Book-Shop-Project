import { CartAction, CartActionTypes, CartState } from '../../types/cart';
//import { addItemToCart, removeItemFromCart } from './utils';

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

const addItemToCart = (cartItems: any[], cartItemToAdd: any = {}) => {
  const existingCartItem = cartItems.find((cartItem: any) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem } : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd }];
};

const removeItemFromCart = (cartItems: any, id: number) =>
  cartItems.filter((item: any) => item.id !== id);

export default cartReducer;
