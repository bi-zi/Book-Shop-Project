import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

export const CommentForm = () => {
  return (
    <div className="book-card-comment-form-container">
      <div className="book-card-comment-form-container-count">Отзывы {}</div>

      {0 === 0 ? (
        <button className="book-card-comment-form-container-open">Оставить отзыв</button>
      ) : (
        <form className="book-card-comment-form-container__form">
          <div className="book-card-comment-form-container-close">
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <div className="book-card-comment-form-container__form__user-info">
            <label className="book-card-comment-form-container__form__user-info-label">
              Имя или псевдоним
            </label>
            <input
              type="text"
              value={'nameComment'}
              placeholder="От 2 символов"
              className="book-card-comment-form-container__form__user-info-input"
              minLength={2}
            />
          </div>

          <div className="book-card-comment-form-container__form__caption">
            <label className="book-card-comment-form-container__form__caption-label">Заголовок</label>
            <input
              type="text"
              placeholder="От 2 символов"
              className="book-card-comment-form-container__form__caption-input"
              minLength={2}
            />
          </div>

          <div className="book-card-comment-form-container__form__text">
            <label className="book-card-comment-form-container__form__text-label">Комментарий</label>
            <textarea
              placeholder=" От 2 символов"
              value={''}
              className="book-card-comment-form-container__form__text-textarea"
            />
          </div>

          {'nameComment.length < 2' || 'titleComment.length < 2 ' || 'textComment.length < 2' ? (
            <div className="book-card-comment-form-container__form-validation">Заполните все поля</div>
          ) : (
            <button className="book-card-comment-form-container__form-submit-button">
              Добавить отзыв
            </button>
          )}

          <div className="book-card-comment-form-container__form-total-characters">
            Всего символов: {'textComment.length'}
          </div>
        </form>
      )}
    </div>
  );
};
