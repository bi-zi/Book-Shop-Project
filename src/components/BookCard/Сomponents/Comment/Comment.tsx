import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import {
  setBooksCommentsDelete,
  setBooksCommentsChange,
} from '../../../../store/BooksInteraction/Slice';
import { Books } from '../../Types';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

interface MyProps {
  book: Books;
}

export const Comment = ({ book }: MyProps) => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const [openCommentForm, setOpenCommentForm] = React.useState({ id: '' });

  const [nickName, setNickName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [changedComment, setComment] = React.useState('');

  const comments = booksInteraction.booksComments.find(
    (comment) => comment.bookId === book.id,
  )?.comments;

  const openForm = (id: string, nickName: string, title: string, comment: string) => {
    setOpenCommentForm({ id: openCommentForm.id === id ? '' : id });
    setNickName(nickName);
    setTitle(title);
    setComment(comment);
  };

  const changeComment = (commentIndex: number, id: string) => {
    const newComment = {
      id: id,
      nickName: nickName[0].toUpperCase() + nickName.toLowerCase().split('').splice(1, 999).join(''),
      title: title,
      comment: changedComment,
      date: `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`,
    };

    dispatch(
      setBooksCommentsChange({ book: book?.id, comment: newComment, commentIndex: commentIndex }),
    );

    setOpenCommentForm({ id: openCommentForm.id === id ? '' : id });
  };

  return (
    <>
      {comments?.map((comment, index) => (
        <div className="book-card-comment-container" key={comment?.id}>
          <div className="book-card-comment-container__interaction">
            <FontAwesomeIcon className="book-card-comment-container__interaction-drop" icon={faXmark} />
            <div className="book-card-comment-container__interaction-drop-down">
              <span
                onClick={() =>
                  openForm(
                    openCommentForm.id === comment.id ? '' : comment.id,
                    comment.nickName,
                    comment.title,
                    comment.comment,
                  )
                }>
                {openCommentForm.id !== comment?.id ? 'Изменить' : 'Закрыть'}
              </span>
              <span
                onClick={() =>
                  dispatch(setBooksCommentsDelete({ book: book?.id, commentIndex: index }))
                }>
                Удалить
              </span>
            </div>
          </div>
          {openCommentForm.id !== comment?.id ? (
            <>
              <div className="book-card-comment-container__info">
                <span className="book-card-comment-container__info-nick-name">{comment?.nickName}</span>
                <br />
                <span className="book-card-comment-container__info-time">{comment?.date}</span>
              </div>

              <p className="book-card-comment-container-title">Заголовок - {comment?.title}</p>
              <p className="book-card-comment-container-text">Комментарий - {comment?.comment}</p>
            </>
          ) : (
            <>
              <div className="book-card-comment-container__info">
                <input
                  type="text"
                  value={nickName}
                  placeholder="От 2 символов"
                  minLength={2}
                  maxLength={30}
                  className="book-card-comment-container-nick-name-change"
                  onChange={(e) => setNickName(e.target.value)}
                />

                <br />
                <input
                  type="text"
                  value={title}
                  placeholder="От 2 символов"
                  minLength={2}
                  maxLength={90}
                  className="book-card-comment-container-title-change"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <textarea
                value={changedComment}
                placeholder=" От 2 символов"
                minLength={2}
                maxLength={3000}
                className="book-card-comment-container-text-change"
                onChange={(e) => setComment(e.target.value)}
              />
              {nickName.length < 2 || title.length < 2 || changedComment.length < 2 ? (
                <div className="book-card-comment-form-container__form-validation">
                  Заполните все поля
                </div>
              ) : (
                <div className="book-card-comment-container__change">
                  <button
                    className="book-card-comment-container__change-button"
                    onClick={(e) => changeComment(index, comment?.id)}>
                    Submit
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

// [
//         {
//           id: 1,
//           nickName: 'Алексей Романенко',
//           date: '10:37:19 14.12.2022',
//           comment: `Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.
// С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. . Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.
// Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. `,
//         },
//         {
//           id: 2,
//           nickName: 'Алексей Романенко',
//           date: '10:37:19 14.12.2022',
//           comment: `Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную `,
//         },
//       ]
