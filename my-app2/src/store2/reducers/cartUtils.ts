export const addItemToCart = (cartItems:any, cartItemToAdd:any) => {
  const existingCartItem = cartItems.find((cartItem:any) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem } : cartItem,
    );
  }
 
  return [...cartItems, { ...cartItemToAdd }];
};

export const removeItemFromCart = (cartItems: any, id: number) =>
  cartItems.filter((item: any) => item.id !== id);
