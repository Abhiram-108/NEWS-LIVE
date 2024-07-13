import React from 'react';
import news from '../components/news.jpg';

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card d-inline-block  my-3 mx-3"
      style={{ maxWidth: '345px' }}
    >
      <img
        className="card-img-top"
        src={src ? src : news}
        style={{ height: '200px', width: '360px' }}
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Read-More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
