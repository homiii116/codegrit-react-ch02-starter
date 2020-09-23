import React from 'react';

const Comment = ({name, comment}) => {
  return (
      <li className="poster-comment">
        <a className="commenter-name" href="">{name}</a>
        <span className="commenter-comment">{comment}</span>
      </li>
  );
}

export default Comment;