import React from 'react'
import CardImage from './CardImage';
import CardMain from './CardMain';

const CardBody = () => {
  return (
    <section className="card-body">
      <CardImage />
      <CardMain />
    </section>
  )
}

export default CardBody;

