import React from 'react'
import './Style.css'

export const Delivery = () => {
  return (
    <div className="delivery">
      <div className="shipping_methods">
        Способы доставки в <span className="city_name">Город "--":</span>
      </div>

      <div className="book_shop">
        В магазины сети
        <span className="city_name"> Адреса</span>
        <span className="shipping_cost"> Бесплатно</span>
        <br />
        <span className="delivery_date">Завтра</span>
      </div>

      <div className="place_receipt">
        В пункты выдачи
        <span className="city_name"> Адреса</span>
        <span className="shipping_cost">Бесплатно</span>
        <br />
        <span className="delivery_date">Завтра</span>
      </div>

      <div className="сourier">
        Курьером
        <span className="сourier_cost"> 322 ₽</span>
        <br />
        <span className="сourier_cost_over">Бесплатно</span>
        <span className="orders_over"> при заказе от 3000₽</span>
      </div>
    </div>
  );
}
