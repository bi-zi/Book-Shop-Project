import React from 'react';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../components/utils';
// import ShoppingCart from '../components/shoppingCart/shoppingCart';

function Basket() {
  const items: any = useSelector((state: any) => state.cart.itemsInCart);
  //const totalPrice = calcTotalPrice(items);

  // return <ShoppingCart items={items} onClick={() => null} />;
}

export default Basket;
