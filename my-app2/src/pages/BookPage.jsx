import React, { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fainstagram } from '@fortawesome/free-solid-svg-icons';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

function BookPage() {
  const { books, error, loading } = useTypedSelector((state) => state.book);
  const { fetchBooks } = useActions();

  let book = books[75];

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
        <div className="shippingMethods"></div>
        <div className="bookShop"></div>
        <div className="placeReceipt"></div>
        <div className="сourier"></div>
      </div>
      <div className="annotation">
        <div className="annotationText">{book?.description}</div>
        <div className="annotationReport"></div>
      </div>
      <div className="recommendations">
        <div className="thisSectionBooks"></div>
        <div className="viewedBooks"></div>
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
