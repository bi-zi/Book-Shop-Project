import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: any;
  text: any;
}

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    itemsInCart: [] as Item[],
  },
  reducers: {
    setItemInCart: (state, action: PayloadAction<Item>) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter((game) => game.id !== action.payload);
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
