import { CommentsAction, CommentsActionTypes, CommentState } from '../../types/comment';

const initialState: CommentState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action: CommentsAction): CommentState => {
  switch (action.type) {
    case CommentsActionTypes.COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case CommentsActionTypes.COMMENT_UPDATE:
      const { payload } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === payload.id);
      const nextComments = [...comments.slice(0, itemIndex), payload, ...comments.slice(itemIndex + 1)];

      return {
        ...state,
        comments: nextComments,
      };

    case CommentsActionTypes.COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((res) => res.id === id);

        const nextComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];

        return {
          ...state,
          comments: nextComments,
        };
      })();
    default:
      return state;
  }
};

export default commentsReducer;
