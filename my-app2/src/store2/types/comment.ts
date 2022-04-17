export interface CommentState {
  comments: Comment[];
}

interface Comment {
  text: string;
  id: string;
}

export enum CommentsActionTypes {
  COMMENT_CREATE = 'COMMENT_CREATE',
  COMMENT_UPDATE = 'COMMENT_UPDATE',
  COMMENT_DELETE = 'COMMENT_DELETE',
}

interface AddCommentAction {
  type: CommentsActionTypes.COMMENT_CREATE;
  payload: {
    text: string;
    id: string;
  };
}

interface UpdateCommentAction {
  type: CommentsActionTypes.COMMENT_UPDATE;
  payload: {
    text: string;
    id: string;
  };
}

interface DeleteCommentAction {
  type: CommentsActionTypes.COMMENT_DELETE;
  id: string;
}

export type CommentsAction = AddCommentAction | UpdateCommentAction | DeleteCommentAction;
