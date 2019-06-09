import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getPost, createComment } from 'bus/posts/thunk';

import PostDetailView from './PostDetailView';

const PostDetail = ({
  match: {
    params: { id },
  },
  getPost,
  post,
  comments,
  createComment,
}) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  const handleInput = e => setComment(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (comment) {
      const newComment = {
        postId: post.id,
        body: comment,
      };
      createComment(newComment);
      setComment('');
    }
  };
  return (
    <PostDetailView
      post={post}
      comments={comments}
      handleInput={handleInput}
      comment={comment}
      handleSubmit={handleSubmit}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  getPost: getPost(dispatch),
  createComment: createComment(dispatch),
});
const mapStateToProps = state => ({
  post: state.posts.post,
  comments: state.posts.comments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
