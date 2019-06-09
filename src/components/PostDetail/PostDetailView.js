import React from 'react';
import styled from 'styled-components';

const PostDetailView = ({
  comments,
  comment,
  post,
  handleInput,
  handleSubmit,
}) => {
  const displayComment = ({ body, id, author, date }) => (
    <Commentwrapper key={id}>
      <SpanBlock> {author && `author: ${author}`}</SpanBlock>
      <SpanBlock> {date && `date: ${date}`}</SpanBlock>
      <p>{body}</p>
    </Commentwrapper>
  );
  const displayPost = ({ body, id, title }) => (
    <div key={id}>
      <h1>Post:</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );

  return (
    <>
      {post && displayPost(post)}
      <h1>Create comment:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleInput}
          placeholder="Write a comment..."
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {comments && comments.length !== 0 && (
          <>
            <h1>Comments:</h1>
            {comments.map(displayComment)}
          </>
        )}
      </div>
    </>
  );
};

const Commentwrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  &:last-child {
    border-bottom: 0;
  }
  padding: 10px 0;
`;
const SpanBlock = styled.span`
  display: block;
`;
export default PostDetailView;
