import React, {  useState, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';

function SingleComment({ data }) {
  const { deleteComment, updateComment } = useActions();
  const [commentText, setCommentText] = useState('');
  const { stat, bookId } = data;

  const [writeСomment, setWriteСomment] = useState(0);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateComment(commentText, stat.id, bookId, stat.comName, stat.comTitle);

  };

  const handleDelete = (e) => {
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

  let a = stat.text;
  useEffect(() => {
    if (a) {
      setCommentText(a);
    }
  }, [a]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  console.log(data);

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="recall_box">
        <div onClick={handleDelete} className="reacall_dox_delete">
          &times;
        </div>
        <div className="recall_box_time">Дата написания отзыва {output}</div>

        <div className="recal_comment_topic">{stat.comTitle}</div>

        {writeСomment === 0 ? (
          <p className="recall_box_text">{commentText}</p>
        ) : (
          <textarea
            type="text"
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
