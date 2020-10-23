import React from "react";
import "./NewsItem.css";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="NewsItem">
      <div className="thumbnail">
        <img src={urlToImage} alt="thumbnail" />
      </div>
      <div className="contents">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
