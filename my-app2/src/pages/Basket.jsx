import React from 'react';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../components/utils';
import ShoppingCart from '../components/shoppingCart/shoppingCart';

function Basket() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <span className="cart-block__total-price">{totalPrice} руб.</span>
      <ShoppingCart items={items} onClick={() => null} />
    </div>
  );
}

export default Basket;
