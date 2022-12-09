import React from 'react';
import { Books } from '../../Types';
import './Style.css';

interface MyProps {
  book: Books;
}

export const Annotation = ({ book }: MyProps) => {
  return (
    <div className="annotation">
      <div className="annotation_name">Описание</div>
      <div className="annotation_text">{book?.description}</div>
      <div className="annotation_report">Сообщить об ошибке</div>
    </div>
  );
};
