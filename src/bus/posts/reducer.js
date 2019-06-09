import { handleActions } from 'redux-actions';

import { postsActions } from './actions';

const initialState = {
  posts: [],
  post: {},
  comments: [],
};

export const postsReducer = handleActions(
  {
    [postsActions.setPosts]: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
      };
    },
    [postsActions.setPost]: (state, { payload }) => {
      return {
        ...state,
        post: payload,
        comments: payload.comments,
      };
    },
    [postsActions.createComment]: (state, { payload }) => {
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    },
  },
  initialState,
);
