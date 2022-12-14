import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import './Style.css'

export const  Comment = () => {


  return (
    <div className="book-card-comment-container">
      <div className="book-card-comment-container__interaction">
        <div className="book-card-comment-container__interaction-comment-change"> </div>
        <div className='book-card-comment-container__interaction-comment-delete'></div>
      </div>

      <div className="book-card-comment-container__info">
        <span className="book-card-comment-container__info-nick-name"></span>
        <span className="book-card-comment-container__info-time"></span>
      </div>
    </div>
  );
}
