import React from 'react'

const Comments = () => {
  return (
    <ul className="comments">
      <li className="poster-comment">
        <a className="commenter-name">testuser</a>
        <span className="commenter-comment">This is the insta-card!</span>
      </li>
      <li>
        <a className="commenter-name">testuser2</a>
        <span className="commenter-comment">So cool!</span>
      </li>
    </ul>
  );
}

export default Comments;

