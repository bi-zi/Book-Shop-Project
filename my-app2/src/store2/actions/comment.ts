import { CommentsActionTypes } from '../types/comment';

export const addComment = (text: string, id: string, comId: number) => {
  return {
    type: CommentsActionTypes.COMMENT_CREATE,
    payload: { bookId: comId, stat: [{ text, id }] },
  };
};

export const updateComment = (text: string, id: string) => {
  return {
    type: CommentsActionTypes.COMMENT_UPDATE,
    payload: { text, id },
  };
};

export const deleteComment = (id: string) => {
  return {
    type: CommentsActionTypes.COMMENT_DELETE,
    id,
  };
};
