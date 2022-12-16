import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Store';
import { Books } from '../../Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

interface MyProps {
  book: Books;
}

export const Comment = ({ book }: MyProps) => {
  const dispatch = useAppDispatch();
  const booksInteraction = useAppSelector((state) => state.booksInteraction);

  const comments = booksInteraction.booksComments.find(
    (comment) => comment.bookId === book.id,
  )?.comments;
  //[{ id: 1, nickName: 'Алексей', date: '10:37:19 14.12.2022',comment: 'sadfsafdsadfasdf asdf asdf asdf asdf '}]
  return (
    <>
      {[
        {
          id: 1,
          nickName: 'Алексей Романенко',
          date: '10:37:19 14.12.2022',
          comment: `Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.
С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. . Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.
Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. `,
        },
        {
          id: 2,
          nickName: 'Алексей Романенко',
          date: '10:37:19 14.12.2022',
          comment: `Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную `,
        },
      ]?.map((comment) => (
        <div className="book-card-comment-container" key={comment.id}>
          <div className="book-card-comment-container__interaction">
            <FontAwesomeIcon icon={faXmark} />
            <div className="book-card-comment-container__interaction-comment-change">Изменить</div>
            <div className="book-card-comment-container__interaction-comment-delete">Удалить</div>
          </div>

          <div className="book-card-comment-container__info">
            <span className="book-card-comment-container__info-nick-name">{comment.nickName}</span>
            <br />
            <span className="book-card-comment-container__info-time">{comment.date}</span>
          </div>

          <p className="book-card-comment-container-text">{comment.comment}</p>
        </div>
      ))}
    </>
  );
};
