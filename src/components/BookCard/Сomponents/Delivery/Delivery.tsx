import React from 'react';
import './Style.css';

export const Delivery = () => {
  return (
    <div className="book-card__delivery-container">
      <div className="book-card__delivery-container__shipping-methods">
        Способы доставки в
        <span className="book-card__delivery-container__selection-place"> Город "--":</span>
      </div>

      <div className="book-card__delivery-container__shops">
        В магазины сети
        <span className="book-card__delivery-shops-place"> Адреса</span>
        <span className="book-card__delivery-shops-cost"> Бесплатно</span>
        <br />
        <span className="book-card__delivery-shops-cost-date">Завтра</span>
      </div>

      <div className="book-card__delivery-container__place-of-receipt">
        В пункты выдачи
        <span className="book-card__delivery-shops-place"> Адреса</span>
        <span className="book-card__delivery-shops-cost">Бесплатно</span>
        <br />
        <span className="book-card__delivery-shops-cost-date">Завтра</span>
      </div>

      <div className="сourier">
        Курьером
        <span className="book-card__delivery-container__сourier-cost"> 322 ₽</span>
        <br />
        <span className="book-card__delivery-container__сourier-over">Бесплатно</span>
        <span className="book-card__delivery-container__сourier-orders"> при заказе от 3000₽</span>
      </div>
    </div>
  );
};
