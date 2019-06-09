import React from 'react';
import { Link } from 'react-router-dom';

const PostsView = ({ posts }) => {
  const displayAllPosts = ({ title, body, id }) => (
    <Link to={`/post/${id}`} key={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
  return <>{posts && posts.map(displayAllPosts)}</>;
};

export default PostsView;
