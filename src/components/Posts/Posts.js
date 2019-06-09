import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from 'bus/posts/thunk';

import PostsView from './PostsView';

const Posts = ({ getAllPosts, posts }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return <PostsView posts={posts} />;
};

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => getAllPosts(dispatch),
});

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
