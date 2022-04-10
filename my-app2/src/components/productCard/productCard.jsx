import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
//import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import { addItem } from '../../store2/actions/cart';

//import { setItemInCart } from '../../store/reducers/reducer';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './productCard.css';


function ProductCard({ addItem, items }) {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();
  const { id } = useParams();
  let book = books[id];
  let arr = items.find((x) => x.id === +id);

  const handleClick = (e) => {
    e.preventDefault();
    addItem(book);
  };


  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
  };

  let bookRecommended = books.filter((x) => Object.values(x)[8] === Object.values(book)[8]);
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="book_page_container">
      <img className="main_image" src={book?.imageUrl} alt="" />

      <div className="social_media">
        <div className="vk"></div>
        <div className="instagram"></div>
        <div className="facebook"></div>
        <div className="odnoklassniki"></div>
        <div className="twitter"></div>
      </div>

      <div className="book_description">
        <div className="book_name">
          {book?.bookName}
          <div className="book_author">{book?.authorName}</div>
        </div>

        <div className="star">★</div>
        <div className="book_rating">{book?.bookRating}</div>
        <div className="reviews_number">1337 оценок</div>

        <div className="rating_area">
          <input type="radio" id="star-5" name="rating" value="5" />
          <label htmlFor="star-5" title="Оценка «5»"></label>
          <input type="radio" id="star-4" name="rating" value="4" />
          <label htmlFor="star-4" title="Оценка «4»"></label>
          <input type="radio" id="star-3" name="rating" value="3" />
          <label htmlFor="star-3" title="Оценка «3»"></label>
          <input type="radio" id="star-2" name="rating" value="2" />
          <label htmlFor="star-2" title="Оценка «2»"></label>
          <input type="radio" id="star-1" name="rating" value="1" />
          <label htmlFor="star-1" title="Оценка «1»"></label>
        </div>
      </div>

      <div className="trade_container">
        <div className="book_price">
          {book?.price} ₽ <div className="availability">В наличии</div>
        </div>
        {arr?.id === +id ? (
          <Link to="/Basket" className="book_buy">
            <button>Перейти в корзину</button>
          </Link>
        ) : (
          <div className="book_buy">
            <button onClick={handleClick}>Купить</button>
          </div>
        )}

        <div className="book_marks">
          <button>В закладки</button>
        </div>
      </div>

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

      <div className="annotation">
        <div className="annotation_name">Описание</div>
        <div className="annotation_text">{book?.description}</div>
        <div className="annotation_report">Сообщить об ошибке</div>
      </div>

      <div className="recommendations">
        <h2 className="slider_name">{books[id]?.categoryRu}</h2>

        <Slider {...settings}>
          {bookRecommended.map((book) => {
            let i = 0;
            if (i < 16) {
              i++;
              return (
                <Link key={book.id} to={`/Book/${book.id}`}>
                  <div className={`slider_book ${i}`} key={book?.id}>
                    <div className="slider_card_settings">
                      <img height="250px" width="150px" src={book?.imageUrl} alt="" />
                      <div className="slider_card_info">
                        <div className="slider_rating">★{book?.bookRating}★</div>
                        <div className="slider_price">{book?.price} ₽</div>
                      </div>
                    </div>
                    <div className="slider_book_author">{book?.authorName}</div>
                    <div className="slider_book_name">{book?.bookName}</div>
                  </div>
                </Link>
              );
            }
          })}
        </Slider>
      </div>
      <div className="reviews">
        <div className="postReview"></div>
        <div className="reviewsSort"></div>
        <div className="userReviews"></div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  items: cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
