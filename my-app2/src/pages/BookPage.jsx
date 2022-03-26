import React, { useEffect, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fainstagram } from '@fortawesome/free-solid-svg-icons';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { Context } from '../components/context';
import Slider from 'react-slick';

function BookPage() {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();
  const value = useContext(Context);
  let a = books[value.bookId];
  let fsd = []
  for (let i in a) {
    fsd.push(a[i])
  }
  console.log(fsd[7])

  let book = books[value.bookId];
  let superCheck = books.filter((book) => Object.values(book)[7] === fsd[7]);

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
  };

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
    <div className="BookPageContainer">
      <div className="bookImage">
        <img className="mainImage" src={book?.imageUrl} alt="" />
      </div>

      <div className="socialMedia">
        <div className="vk"></div>
        <div className="instagram"></div>
        <div className="facebook"></div>
        <div className="odnoklassniki"></div>
        <div className="twitter"></div>
      </div>

      <div className="bookDescription">
        <div className="nameBook">
          {book?.bookName}
          <div className="bookAuthor">{book?.authorName}</div>
        </div>
        <div className="ratingContainer">
          <div className="star">★</div>
          <div className="Bookrating">{book?.bookRating}</div>
          <div className="numberOfReviews">1337 оценок</div>

          <div className="rating-area">
            <input type="radio" id="star-5" name="rating" value="5" />
            <label for="star-5" title="Оценка «5»"></label>
            <input type="radio" id="star-4" name="rating" value="4" />
            <label for="star-4" title="Оценка «4»"></label>
            <input type="radio" id="star-3" name="rating" value="3" />
            <label for="star-3" title="Оценка «3»"></label>
            <input type="radio" id="star-2" name="rating" value="2" />
            <label for="star-2" title="Оценка «2»"></label>
            <input type="radio" id="star-1" name="rating" value="1" />
            <label for="star-1" title="Оценка «1»"></label>
          </div>
        </div>
        <div className="numberOfPurchases"></div>
      </div>

      <div className="tradeContainer">
        <div className="bookPrice">
          {book?.price} ₽ <div className="availability">В наличии</div>
        </div>
        <div className="buyBook">
          <button>Купить</button>
        </div>
        <div className="bookmarks">
          <button>В закладки</button>
        </div>
      </div>
      <div className="delivery">
        <div className="shippingMethods">
          Способы доставки в <span className="cityName">Город "--":</span>
        </div>

        <div className="bookShop">
          В магазины сети
          <span className="cityName"> Адреса</span>
          <span className="shippingCost"> Бесплатно</span>
          <br />
          <span className="deliveryDate">Завтра</span>
        </div>

        <div className="placeReceipt">
          В пункты выдачи
          <span className="cityName"> Адреса</span>
          <span className="shippingCost">Бесплатно</span>
          <br />
          <span className="deliveryDate">Завтра</span>
        </div>

        <div className="сourier">
          Курьером
          <span className="сourierCost"> 322 ₽</span>
          <br />
          <span className="сourierCostOver">Бесплатно</span>
          <span className="ordersOver"> при заказе от 3000₽</span>
        </div>
      </div>

      <div className="annotation">
        <div className="annotationName">Описание</div>
        <div className="annotationText">{book?.description}</div>
        <div className="annotationReport">Сообщить об ошибке</div>
      </div>

      <div className="recommendations">
        <div className="thisSectionBooks">
          <h2 className="sliderName">{fsd[8]}</h2>
          <Slider {...settings}>
            {superCheck.map((book) => {
              let i = 0;
              if (i < 16) {
                i++;
                return (
                  <div className={`miniBook ${i}`} key={book?.id}>
                    <div className="miniImageSettings">
                      <img height="250px" width="150px" src={book?.imageUrl} alt="" />
                      <div className="miniInfo">
                        <div className="rating">★{book?.bookRating}★</div>
                        <div className="price">{book?.price} ₽</div>
                      </div>
                    </div>
                    <div className="miniAuthor">{book?.authorName}</div>
                    <div className="miniBookName">{book?.bookName}</div>
                  </div>
                );
              }
            })}
          </Slider>
        </div>

        <div className="viewedBooks">
          <h2 className="sliderName">Недавно просмотренные</h2>
          <Slider {...settings}>
            {superCheck.map((book) => {
              let i = 0;
              if (i < 16) {
                i++;
                return (
                  <div className={`miniBook ${i}`} key={book?.id}>
                    <div className="miniImageSettings">
                      <img height="250px" width="150px" src={book?.imageUrl} alt="" />
                      <div className="miniInfo">
                        <div className="rating">★{book?.bookRating}★</div>
                        <div className="price">{book?.price} ₽</div>
                      </div>
                    </div>
                    <div className="miniAuthor">{book?.authorName}</div>
                    <div className="miniBookName">{book?.bookName}</div>
                  </div>
                );
              }
            })}
          </Slider>
        </div>
      </div>
      <div className="reviews">
        <div className="postReview"></div>
        <div className="reviewsSort"></div>
        <div className="userReviews"></div>
      </div>
    </div>
  );
}

export default BookPage;
