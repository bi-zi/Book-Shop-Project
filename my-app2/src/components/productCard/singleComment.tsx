import React, { useState, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';

export interface Foo {
  data: any;
}

function SingleComment({ data }: Foo) {
  const { deleteComment, updateComment } = useActions();
  const [commentText, setCommentText] = useState('');
  const { stat, bookId } = data;
  const [writeСomment, setWriteСomment] = useState(0);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    updateComment(commentText, stat.id, bookId, stat.comName, stat.comTitle);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteComment(stat.id);
  };
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, '0') +
    ':' +
    String(date.getMonth() + 1).padStart(2, '0') +
    ':' +
    date.getFullYear();

  let text = stat.text;
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e: any) => {
    setCommentText(e.target.value);
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="recall_box">
        <div onClick={handleDelete} className="reacall_box_delete">
          &times;
        </div>
        <div className="recall_box_time">Дата написания отзыва {output}</div>

        <div className="recal_comment_topic">{stat.comTitle}</div>

        {writeСomment === 0 ? (
          <p className="recall_box_text">{commentText}</p>
        ) : (
          <textarea
            value={commentText}
            onChange={handleInput}
            className="recall_box_area"
            minLength={2}
          />
        )}

        <div className="edit_recall">
          {writeСomment === 0 ? (
            <button onClick={() => setWriteСomment(1)}>изменить комментрай</button>
          ) : (
            <button onClick={() => setWriteСomment(0)}>
              Cохранить изменения
              <input type="submit" hidden />
            </button>
          )}
        </div>

        <div className="recal_writer_name">{stat.comName}</div>
      </div>
    </form>
  );
}

export default SingleComment;
