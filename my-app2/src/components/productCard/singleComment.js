import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context';
import { useActions } from '../../hooks/useActions';

function SingleComment({ data }) {
  const { deleteComment, updateComment } = useActions();
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const value = useContext(Context);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateComment(commentText, id);
    value.setCheck(1);
    value.check = 1;
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(id);
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

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
