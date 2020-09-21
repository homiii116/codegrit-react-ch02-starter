import React from 'react'
import MainPic from './../../images/instacard-main-image.jpg';

const CardImage = () => {
  return (
    <div className="card-image">
      <img src={MainPic} />
    </div>
  );
}

export default CardImage;
