import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import {
  fetchBasketBooks,
  setBasketDeleteBook,
  setBasketDeleteAll,
  setNumberOfBooksPlus,
  setNumberOfBooksMinus,
} from '../../store/Basket/Slice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './Style.css';


export const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket);


  const books = basket.basketBooks;
  const booksCount = books.length;

  const totalPrice = books.reduce((total, book) => (total += book.price * book.numberOfBooks), 0);

  React.useEffect(() => {
    dispatch(fetchBasketBooks(basket.basketBooksId));
  }, [dispatch, basket.basketBooksId]);

  return (
    <div className="cart">
      <div className="menu">
        <div className="goods_quantity">Корзина: {booksCount}</div>
        {booksCount > 0 ? <div className="total_price">Общая цена {totalPrice} ₽</div> : null}

        <div className="remove_all_product" onClick={() => dispatch(setBasketDeleteAll())}>
          <FontAwesomeIcon className="trash_icon" icon={faTrashCan} />
          <div className="products_delete">Удалить все товары</div>
        </div>
      </div>

      <div className="cart_container">
        {booksCount === 0 ? <div className="empty_basket">Ваша корзина пуста</div> : null}
        {books.map((book, index) => {
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
                  {book.numberOfBooks > 1 ? (
                    <button
                      className="counter_minus"
                      onClick={() => dispatch(setNumberOfBooksMinus(index))}>
                      —
                    </button>
                  ) : (
                    <button className="counter_minus">—</button>
                  )}
                  <div className="counter_number">{book.numberOfBooks}</div>
                  <button className="counter_plus" onClick={() => dispatch(setNumberOfBooksPlus(index))}>
                    +
                  </button>
                </div>

                <div className="product_cost">
                  <div className="product_price">{book?.price * book?.numberOfBooks} ₽</div>
                  <div className="price_multiplication">
                    {book?.price} ₽ x {book.numberOfBooks}шт
                  </div>
                </div>

                <div className="remove_product" onClick={() => dispatch(setBasketDeleteBook(index))}>
                  <FontAwesomeIcon className="trash_icon" icon={faTrashCan} />
                  <div>Удалить</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
