import { CommentsActionTypes } from '../types/comment';

export const addComment = (text: string, id: string, comId: string) => {
  return {
    type: CommentsActionTypes.COMMENT_CREATE,
    payload: { bookId: comId, stat: { text, id } },
  };
};

export const updateComment = (text: string, id: string, comId: string) => {
  return {
    type: CommentsActionTypes.COMMENT_UPDATE,
    payload: { bookId: comId, stat: { text, id  } },
  };
};

export const deleteComment = (comId: string) => {
  return {
    type: CommentsActionTypes.COMMENT_DELETE,
    comId,

  };
};
