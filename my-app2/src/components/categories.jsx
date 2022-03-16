import React from 'react';
import detectives from '../assets/books/business literature/books.json';
import Header from './header';

function Сategories() {
  // function choiceCategory(selectedItem) {
  //   let item = 6;
  //   switch (selectedItem) {
  //     case 0:
  //       item = 'business literature';
  //       break;
  //     case 1:
  //       item = 'comics manga';
  //       break;
  //     case 2:
  //       item = 'detectives';
  //       break;
  //     case 3:
  //       item = 'fantasy';
  //       break;
  //     case 4:
  //       item = 'programming';
  //       break;
  //     case 5:
  //       item = 'psychology';
  //       break;
  //     default:
  //   }
  // }

console.log(Header);

  let suka = detectives.books;

  console.log(suka);

  return (
    <div className="booksContainer">
      <div id="1" className="line line-0">
        {suka.map((todo) => (
          <div className="book0">
            <div className="imageSettings">
              <img key={todo.id} height="310px" width="200px" src={todo.imageUrl} alt="" />
              <div className="rating">★{todo.bookRating}★</div>
            </div>
            <div className="author">{todo.authorName}</div>
            <div className="bookName">{todo.bookName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Сategories;
