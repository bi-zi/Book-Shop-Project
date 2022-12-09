import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './Style.css';



export const ShoppingCart = ( ) => {
  // const [cardConnect, setCardConnect] = React.useState(items);

  // const countPlus = (id: any) => {
  //   items.map((post) => {
  //     if (post.id === id) {
  //       post.counter++;
  //     }
  //   });
  //   setCardConnect(items.concat([]));
  // };

  // const countMinus = (id: Foo) => {
  //   items.map((post) => {
  //     if (post.id === id) {
  //       post.counter--;
  //     }
  //   });
  //   setCardConnect(items.concat([]));
  // };

  // const removeAllProducts = (id: any) => {
  //   items.map((x) => removeItem(x.id));
  // };

  // let totalPrice = items.reduce((acc, item) => (acc += item.price * item.counter), 0);

  return (
    <div className="cart">
      {/* <div className="menu">
        <div className="goods_quantity">Корзина: {itemsCount}</div>
        {itemsCount > 0 ? <div className="total_price">Общая цена {totalPrice} ₽</div> : null}
        <div className="remove_all_product" onClick={removeAllProducts}>
          <FontAwesomeIcon className="trash_icon" icon={faTrashCan} />
          <div className="products_delete">Удалить все товары</div>
        </div>
      </div>

      <div className="cart_container">
        {itemsCount === 0 ? <div className="empty_basket">Ваша корзина пуста</div> : null}
        {items.map((book) => {
          return (
            <div className="product" key={book.id}>
              <Link to={`/Book/${book.id}`}>
                <div className="product_cart_book">
                  <div className="product_cart_settings">
                    <img
                      className="product_cart_img"
                      height="250px"
                      width="150px"
                      src={book.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
              </Link>

              <div className="mini_card_container">
                <Link className="product_info" to={`/Book/${book.id}`}>
                  <div className="product_cart_name">{book.bookName}</div>
                  <div className="product_cart_author">{book.authorName}</div>
                </Link>

                <div className="product_counter">
                  {book.counter > 1 ? (
                    <button className="counter_minus" onClick={() => countMinus(book.id)}>
                      —
                    </button>
                  ) : (
                    <button className="counter_minus">—</button>
                  )}
                  <div className="counter_number">{book.counter}</div>
                  <button className="counter_plus" onClick={() => countPlus(book.id)}>
                    +
                  </button>
                </div>

                <div className="product_cost">
                  <div className="product_price">{book?.price * book?.counter} ₽</div>
                  <div className="price_multiplication">
                    {book?.price} ₽ x {book.counter}шт
                  </div>
                </div>

                <div className="remove_product" onClick={() => removeItem(book.id)}>
                  <FontAwesomeIcon className="trash_icon" icon={faTrashCan} />
                  <div>Удалить</div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
