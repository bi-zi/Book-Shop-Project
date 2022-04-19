export interface CartState {
  cartItems: Cart[];
}
interface Cart {
  id: number;
  counter: number;
  imgaeUrl: string;
  imageUrl: string;
  bookName: string;
  authorName: string;
  bookRating: string;
  price: number;
  description: string;
  category: string;
  categoryRu: string;

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
