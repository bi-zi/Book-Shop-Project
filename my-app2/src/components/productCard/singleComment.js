import { useState, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';

function SingleComment({ data }) {
const { deleteComment, updateComment } = useActions();
 const [commentText, setCommentText] = useState('');
 const { text, id } = data;

 const handleUpdate = (e) => {
   e.preventDefault();
   deleteComment(commentText, id);
 };
 console.log(data);
 const handleDelete = (e) => {
   e.preventDefault();
   updateComment(id);
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
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
