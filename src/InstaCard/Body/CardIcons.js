import React from 'react'
import HeartPic from './../../images/heart.png';
import BubblePic from './../../images/bubble.png';
import BookmarkPic from './../../images/bookmark.png';

const CardIcons = () => {

    const imageStyles = {
      width: '30px',
      hwight: '30px',
    }

  return (
    <div className="card-main-icons">
      <ul className="flex-container card-main-icons-left">
        <li className="icon-heart">
          <img src={HeartPic} style={imageStyles} />
        </li>
        <li className="icon-comment">
          <img src={BubblePic} style={imageStyles} />
        </li>
      </ul>
      <ul className="flex-container card-main-icons-right">
        <li className="icon-bookmark icons-right">
          <img src={BookmarkPic} style={imageStyles} />
        </li>
      </ul>
    </div>
  );
}

export default CardIcons;

