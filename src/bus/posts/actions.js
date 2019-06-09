import { createActions } from 'redux-actions';

export const postsActions = createActions({
  SET_POSTS: posts => posts,
  SET_POST: post => post,
  CREATE_COMMENT: body => body,
});
