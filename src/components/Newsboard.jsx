import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9f9678edcd1b4978b2bbdd643cb130ec`
    )
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="latest-news">
        Latest <span className=""> News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
