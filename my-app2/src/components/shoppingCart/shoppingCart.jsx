import React from 'react';
import { calcTotalPrice } from '../utils';
import './shoppingCart.css';

function ShoppingCart({ items, onClick }) {
  return (
    <div calssName="cart-menu">
      <div calssName="cart-menu__games-list">{items.map((game) => game.title)}</div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div calssName="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}</span>
          </div>
          <button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
