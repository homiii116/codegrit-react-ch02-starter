import React from 'react';
import Comment from './Comment';

const Comments = () => {
  const props = {
    name: 'testuser',
    comment: 'This is the insta-card!',
  }
  const props2 = {
    name: 'testuser',
    comment: 'So cool',
  }
  return (
    <ul className="comments">
      <Comment {...props} />
      <Comment {...props2} />
    </ul>
  );
 
}

export default Comments;

