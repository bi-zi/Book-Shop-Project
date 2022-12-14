import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/Store';
import { fetchSelectedBook, fetchRecommendBooks } from '../../store/BooksInteraction/Slice';
import {
  BookDescription,
  TradeContainer,
  Delivery,
  Annotation,
  Recommendations,
  CommentForm,
  Comment,
} from './Сomponents/index';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import './Style.css';

interface MyParams {
  id: string;
}

export const BookCard = () => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const { id } = useParams<keyof MyParams>() as MyParams;

  // const parsing = ``;

  // const pageImage = parsing.split('src="')[2].split(' ')[0].split('"')[0];
  // const pageBookName = parsing.split('<h1 itemprop="name">')[1].split('<')[0];
  // const pageAuthor = parsing
  //   .split('<div class="biblio_book_author">')[1]
  //   .split('<')
  //   .join('')
  //   .split('span itemprop')[1]
  //   .split('/')[0]
  //   .split('>')[1];
  // const pagePrice = parsing
  //   .split('litres.book')[1]
  //   .split('{')[1]
  //   .split('price')[1]
  //   .split('.')[0]
  //   .split('"')[1];

  // const infoForRating = parsing
  //   .split('<div class="rating-number bottomline-rating" aria-hidden="true">')[1]
  //   .split('<')[0]
  //   .split(',');

  // const pageRating = [infoForRating[0], '.', infoForRating[1]].join('');
  // const pageAnnotation = parsing
  //   .split('<div itemprop="description" class="biblio_book_descr_publishers">')[1]
  //   .split('</div>')[0]
  //   .split('<p>')
  //   .join('</p>')
  //   .split('</p>')
  //   .filter((x) => x.length > 0)
  //   .join('');

  // const object = {
  //   id: 0,
  //   counter: 1,
  //   imageUrl: pageImage,
  //   bookName: pageBookName,
  //   authorName: pageAuthor,
  //   bookRating: pageRating,
  //   userRating: 0,
  //   price: +pagePrice,
  //   description: pageAnnotation,
  //   category: 'comics manga',
  //   categoryRu: 'Комиксы и Манга',
  // };

  // console.log(object);

  const book = booksInteraction.selectedBook;

  React.useEffect(() => {
    dispatch(fetchSelectedBook(id));
    dispatch(fetchRecommendBooks(book?.category));
  }, [dispatch, id, book?.category]);

  return (
    <div className="book-card-container">
      <div className="book-card__upper-container">
        <img className="book-card-main-image" width="10px" src={book?.imageUrl} alt="" />

        <BookDescription book={book} />

        <div className="book-card__upped-container__trade-delivery">
          <TradeContainer book={book} linkId={id} />

          <Delivery />
        </div>
      </div>

      <div className="book-card__lower-container">
        <Annotation book={book} />

        <Recommendations />

        <CommentForm book={book} />

        <Comment />
      </div>
    </div>
  );
};

const ob = [

];




// // const hay = ob.map((x, i) => (ob[i].id = uniqid('comicsmanga')));
// const hay = ob.map((x, i) =>
//   Object.assign(ob[i], { reviewsNumber: Math.floor(10 + Math.random() * (1000 + 1 - 10)) }),
// );
// ob.map((x,i) => ob[i].price = Math.floor(100 + Math.random() * (1200 + 1 - 100)))
// console.log(ob);

// console.log(ob.sort(() => Math.round(Math.random() * 100) - 50));
