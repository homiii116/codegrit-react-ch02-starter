import React from 'react'
import CardImage from './CardImage';
import CardIcons from './CardIcons';
import LikeCounts from './LikeCounts';
import Comments from './Comments';
import PostDate from './PostDate';
import CommentBox from './CommentBox';

const CardBody = () => {
  return (
    <section className="card-body">
      <CardImage />
      <CardIcons />
      <LikeCounts />
      <Comments />
      <PostDate />
      <CommentBox />
    </section>
  )
}

export default CardBody;

