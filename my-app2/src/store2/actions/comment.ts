import { CommentsActionTypes } from '../types/comment';

export const addComment = (text: string, id: string) => {
  return {
    type: CommentsActionTypes.COMMENT_CREATE,
    payload:  {text, id}
  };
};

export const updateComment = (text: string, id: string) => {
  return {
    type: CommentsActionTypes.COMMENT_UPDATE,
    payload: { text, id },
  };
};
