import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Style.css'

export const Comments = () => {
  return (
    <div className="reviews">
      <div className="reviews_count">Отзывы {}</div>
      {/* {writeСomment === 0 ? (
        <button className="recall_button" onClick={() => setWriteСomment(1)}>
          Оставить отзыв
        </button>
      ) : (
        <div className="write_review_box">
          <form className="comment_generate" onSubmit={handleSubmit}>
            <div className="close_write_box" onClick={() => setWriteСomment(0)}>
              <FontAwesomeIcon icon={faXmark} />
            </div>

            <div className="write_review_name">
              <label className="writer_review_name">Имя или псевдоним</label>
              <input
                type="text"
                value={nameComment}
                placeholder="От 2 символов"
                onChange={handleInput1}
                className="write_name_input"
                minLength={2}
              />
            </div>

            <div className="text_title">
              <label className="text_title_name">Заголовок</label>
              <input
                type="text"
                value={titleComment}
                onChange={handleInput2}
                placeholder="От 2 символов"
                className="text_title_input"
                minLength={2}
              />
            </div>

            <div className="comment">
              <label className="comment_name">Комментарий</label>
              <textarea
                placeholder=" От 2 символов"
                value={textComment}
                onChange={handleInput3}
                className="comment_name_area"
              />
            </div>

            {nameComment.length < 2 || titleComment.length < 2 || textComment.length < 2 ? (
              <div className="input_check">Заполните все поля</div>
            ) : (
              <button onSubmit={handleSubmit} className="submit_button">
                Добавить отзыв
              </button>
            )}

            <div className="total_characters">Всего символов: {textComment.length}</div>
          </form>
        </div>
      )} */}
    </div>
  );
}
