import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import Header from './Header';
import CardBody from './Body/index';
import * as serviceWorker from './../serviceWorker';

const InstaCard = () => {
  return (
    <article className="insta-card">
      <Header />
      <CardBody />
    </article>
  );
}
 
const RootReactElement = React.createElement(InstaCard, null, null);
ReactDOM.render(RootReactElement, document.getElementById('root'));

export default InstaCard;
serviceWorker.unregister();