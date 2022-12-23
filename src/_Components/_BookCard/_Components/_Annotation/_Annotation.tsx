import React from 'react';
import { Books } from '../../_Types';
import './_Style.css';

interface MyProps {
  book: Books;
}

export const Annotation = ({ book }: MyProps) => {
  return (
    <div className="book-card__annotation-container">
      <div className="book-card__annotation-container-title">Описание</div>
      <div className="book-card__annotation-container-text">{book?.description}</div>
      <div className="book-card__annotation-container-report">
        <a href="https://t.me/the_bi_zi">Сообщить об ошибке</a>
      </div>
    </div>
  );
};
