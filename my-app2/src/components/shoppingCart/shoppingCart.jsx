import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemById } from '../../store/reducers/cart.actions';
import './shoppingCart.css';
//import { useDispatch } from 'react-redux';

const ShoppingCart = ({ items, total, itemsCount, removeItem }) => {
  const [fast, setFast] = useState(items);

  let newPosts=[];
  newPosts = items;

  const likeFunc = (id) => {
    newPosts.map((post) => {
      if (post.id === id) {
        post.counter++;
      }
    });
    setFast(newPosts.concat([]));
  };

  const minus = (id) => {
    newPosts.map((post) => {
      if (post.id === id) {
        post.counter--;
      }
    });
    setFast(newPosts.concat([]));
  };

  return (
    <div className="cart">
      <div className="menu">
        <div className="goods_quantity">Корзина: {itemsCount}</div>
        <div className="remove_all_products">Удалить все товары</div>
      </div>

      <div className="cart_container">
        {itemsCount > 0 ? (
          <div className="total_price">{total}</div>
        ) : (
          <div className="empty_basket">Ваша корзина пуста</div>
        )}

        {newPosts.map((book) => {
          return (
            <div className="product" key={book.id}>
              <div className="product_info">
                <div className="product_cart_name">{book.bookName}</div>
                <div className="product_cart_author">{book.authorName}</div>
              </div>

              <div key={book?.id} className="product_counter">
                {book.counter > 1 ? (
                  <button className="counter_minus" onClick={() => minus(book.id)}>
                    —
                  </button>
                ) : (
                  <button className="counter_minus">—</button>
                )}
                <div className="counter_number">{book.counter}</div>
                <button className="counter_plus" onClick={() => likeFunc(book.id)}>
                  +
                </button>
              </div>

              <div className="product_cost">
                <div className="product_price">{book.price * book.counter} ₽</div>
                <div className="price_multiplication">
                  {book?.price} ₽ x {book.counter}шт
                </div>
              </div>

              <div className="removeProduct">
                <button onClick={() => removeItem(book.id)}>X</button>
              </div>

              <Link to={`/Book/${book.id}`}>
                <div className="product_cart_book">
                  <div className="product_cart_settings">
                    <img height="250px" width="150px" src={book.imageUrl} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => (acc += item.price * item.quantity), 0),
  itemsCount: cartItems.reduce((acc, item) => (acc += item.quantity), 0),
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

// Ну там просто ты можешь нормальные условия задать более понятные, чем вложенные тернарники

// if (cond1) {
//     return <Component1 />
// }

// if (cond2) {
//     return <Comp2 />
// }
// return null;
// есть два варианта, как сделать с массивом

// 1) хранить счетчики в массиве (?) Этот вариант был первый, о котором я подумал из твоего сообщения, но это плохой вариант, потому что бесполезно генерируется массив размера = размеру самого списка. Если в 10000 элементе поменять счетчик, то массив заполнится empty значениями и займет память

// 2) хранить счетчики в массиве объектов айтемов. Т.е. есть объекты, в которых есть поле каунтер. Тогда если ты меняешь тот самый 10000 элемент, то ты делаешь 10000 итераций для его изменений

// логичнее для такого изменяемого стейта сделать мапу айди-счетчик и тогда можно O(1) его менять и доставать
// Стейт это просто данные. Если у тебя компонент принимает пропсы isShow и text, и таких компонентов 100.
// Берём тогда создаём массив с объектами вида { isShow: false, text: “” }
// И рендерим массив

// По изменению какого-то индекса массива берём находим конкретный айтем меняем его и делаем setState() со всем массивом целиком

// Для 96 товаров тебе не надо делать отдельные 96 стейтов

// 1 - сделай стейт массивом и меняй его в зависимости от кол-ва товаров, 1000 товаров = массив на 1000 элементов. Их и трогай по индексу

// 2 - каждый товар отдельным компонентом у которого внутри свой личный стейт

// Вот и все, выбирай

// import React, { useState } from "react";
// import "./styles.css";

// const someItemsList = [
//   { id: 1, name: "item 1" },
//   { id: 2, name: "item 2" },
//   { id: 3, name: "item 3" },
//   { id: 4, name: "item 4" },
//   { id: 5, name: "item 5" }
// ];

// function Item({ item }) {
//   const [product, setProduct] = useState(0);
//   return (
//     <div className="item-container">
//       <div>{item.name}</div>
//       <div>
//         <span
//           className="counter-button"
//           onClick={() => setProduct(product - 1)}
//         >
//           -
//         </span>
//         <span className="counter">{product}</span>
//         <span
//           className="counter-button"
//           onClick={() => setProduct(product + 1)}
//         >
//           +
//         </span>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       {someItemsList.map((item) => {
//         return <Item key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }
