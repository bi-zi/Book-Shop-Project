export interface CartState {
  cartItems: [];
}

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

interface AddBooksAction {
  type: CartActionTypes.ADD_ITEM;
  payload: [];
}

interface RemoveBooksAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: number;
}

export type CartAction = AddBooksAction | RemoveBooksAction;
