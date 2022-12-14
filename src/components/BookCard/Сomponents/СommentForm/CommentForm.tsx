import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import { setBooksCommentsСreate, setBooksCommentsPush } from '../../../../store/BooksInteraction/Slice';
import uniqid from 'uniqid';
import { Books } from '../../Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

interface MyProps {
  book: Books;
}

export const CommentForm = ({ book }: MyProps) => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const [checkForm, setForm] = React.useState(false);

  const [nickName, setNickName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [comment, setComment] = React.useState('');

  const bookCommentsLength = booksInteraction.booksComments.find((comment) => comment.bookId === +book.id)
    ?.comments?.length;

  const createComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const comments = {
      bookId: book.id,
      comments: [
        {
          id: uniqid(),
          nickName: nickName,
          title: title,
          comment: comment,
          date: new Date().toUTCString(),
        },
      ],
    };

    const thisBookHasCommentary =
      booksInteraction.booksComments.find((comment) => comment.bookId === +book.id) === undefined;

    if (thisBookHasCommentary === true) dispatch(setBooksCommentsСreate(comments));
    if (thisBookHasCommentary === false) dispatch(setBooksCommentsPush(comments));

    setNickName('');
    setTitle('');
    setComment('');
  };

  // console.log(booksInteraction.booksComments);

  return (
    <div className="book-card-comment-form-container">
      <div className="book-card-comment-form-container-count">Отзывы {bookCommentsLength === undefined ? 0 : bookCommentsLength}</div>

      {checkForm ? (
        <form className="book-card-comment-form-container__form" onSubmit={(e) => createComment(e)}>
          <div className="book-card-comment-form-container-close" onClick={() => setForm(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <div className="book-card-comment-form-container__form__user-info">
            <label className="book-card-comment-form-container__form__user-info-label">
              Имя или псевдоним
            </label>
            <input
              type="text"
              placeholder="От 2 символов"
              value={nickName}
              minLength={2}
              maxLength={30}
              className="book-card-comment-form-container__form__user-info-input"
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>

          <div className="book-card-comment-form-container__form__caption">
            <label className="book-card-comment-form-container__form__caption-label">Заголовок</label>
            <input
              type="text"
              placeholder="От 2 символов"
              value={title}
              minLength={2}
              maxLength={90}
              className="book-card-comment-form-container__form__caption-input"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="book-card-comment-form-container__form__text">
            <label className="book-card-comment-form-container__form__text-label">Комментарий</label>
            <textarea
              placeholder=" От 2 символов"
              value={comment}
              minLength={2}
              maxLength={3000}
              className="book-card-comment-form-container__form__text-textarea"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          {nickName.length < 2 || title.length < 2 || comment.length < 2 ? (
            <div className="book-card-comment-form-container__form-validation">Заполните все поля</div>
          ) : (
            <button className="book-card-comment-form-container__form-submit-button">
              Добавить отзыв
            </button>
          )}

          <div className="book-card-comment-form-container__form-total-characters">
            Всего символов: {comment.length}
          </div>
        </form>
      ) : (
        <button className="book-card-comment-form-container-open" onClick={() => setForm(true)}>
          Оставить отзыв
        </button>
      )}
    </div>
  );
};
