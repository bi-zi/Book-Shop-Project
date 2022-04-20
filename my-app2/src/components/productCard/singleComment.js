import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context';
import { useActions } from '../../hooks/useActions';

function SingleComment({ data }) {
  const { deleteComment, updateComment } = useActions();
  const [commentText, setCommentText] = useState('');
  const { stat, bookId } = data;
  const value = useContext(Context);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateComment(commentText, stat.id, bookId);
    value.setCheck(1);
    value.check = 1;
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

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>

      <div className="recall_box">
        <div className="recall_box_time">Дата написания отзыва {output}</div>
        <textarea
          type="text"
          value={commentText}
          onChange={handleInput}
          className="recall_box_text"
          minLength={2}
        />
        <button>
          <input type="submit" hidden />
        </button>
      </div>
    </form>
  );
}

export default SingleComment;
