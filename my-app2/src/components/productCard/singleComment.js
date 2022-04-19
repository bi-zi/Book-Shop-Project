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

  // console.log(stat.id);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(stat.id);
  };

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
      <input type="text" value={commentText} onChange={handleInput} minLength={2} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
