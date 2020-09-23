import React from 'react'
import AvatarPic from './../images/avatar.png';

const HeaderCard = () => {
  return (
    <section className="card-header">
      <div className="poster-avatar">
        <img src={AvatarPic} alt="AvataPic"/>
      </div>
      <div className="poster-name">
        testuser
      </div>
    </section>
  );
}

export default HeaderCard;

