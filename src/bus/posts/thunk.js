import { api } from 'REST';
import { postsActions } from './actions';

export const getAllPosts = async dispatch => {
  try {
    const response = await api.posts.getAllPosts();
    const result = await response.json();

    dispatch(postsActions.setPosts(result));
  } catch (err) {
    console.error(err);
  }
};

export const getPost = dispatch => async id => {
  try {
    const response = await api.posts.getPost(id);
    const result = await response.json();

    dispatch(postsActions.setPost(result));
  } catch (err) {
    console.error(err);
  }
};

export const createComment = dispatch => async body => {
  try {
    const response = await api.posts.createComment(body);
    const result = await response.json();

    dispatch(postsActions.createComment(result));
  } catch (err) {
    console.error(err);
  }
};
