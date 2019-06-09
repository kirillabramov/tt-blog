import { api } from 'REST';
import { postsActions } from './actions';

export const getAllPosts = async dispatch => {
  const response = await api.posts.getAllPosts();
  const result = await response.json();

  dispatch(postsActions.setPosts(result));
};

export const getPost = dispatch => async id => {
  const response = await api.posts.getPost(id);
  const result = await response.json();

  dispatch(postsActions.setPost(result));
};

export const createComment = dispatch => async body => {
  const response = await api.posts.createComment(body);
  const result = await response.json();

  dispatch(postsActions.createComment(result));
};
