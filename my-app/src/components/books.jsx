import React from 'react';
import detectives from '../assets/books/business literature/books.json';

function Books() {
  let suka = detectives.books.sort(() => Math.random() - 0.5);;
  
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

export default Books;
