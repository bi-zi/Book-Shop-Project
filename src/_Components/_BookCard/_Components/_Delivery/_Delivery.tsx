import React from 'react';
import './style.css';

export const Delivery = () => {
  return (
    <div className="book-card__delivery-container">
      <div className="book-card__delivery-container__shipping-methods">
        Способы доставки в &nbsp;
        <a
          href="https://yandex.ru/maps/?ll=41.146907%2C53.581189&z=4.33"
          className="book-card__delivery-container__selection-place">
          Город "--":
        </a>
      </div>

      <div className="book-card__delivery-container__shops">
        В магазины сети
        <span className="book-card__delivery-container__shops-place"> Адреса</span>
        <span className="book-card__delivery-container__shops-cost"> Бесплатно</span>
        <br />
        <span className="book-card__delivery-container__shops-date">Завтра</span>
      </div>

      <div className="book-card__delivery-container__shops">
        В пункты выдачи
        <span className="book-card__delivery-container__shops-place"> Адреса</span>
        <span className="book-card__delivery-container__shops-cost">Бесплатно</span>
        <br />
        <span className="book-card__delivery-container__shops-date">Завтра</span>
      </div>

      <div className="book-card__delivery-container__shops">
        Курьером
        <span className="book-card__delivery-container__shops-place"> 322 ₽</span>
        <br />
        <span className="book-card__delivery-container__shops-over">Бесплатно</span>
        <span className="book-card__delivery-container__shops-orders"> при заказе от 3000₽</span>
      </div>
    </div>
  );
};
