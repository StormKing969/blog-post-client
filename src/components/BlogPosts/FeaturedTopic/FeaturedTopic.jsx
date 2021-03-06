import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedTopic.scss";

const FeaturedTopic = (props) => {
  function truncate(str, size) {
    if (str.length <= size) {
      return str;
    }

    return str.slice(0, size) + "...";
  }

  let date = new Date(props.createdAt);

  let day = date.getDay();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  const singleBlogURL = "/" + props.id + "/" + props.title;

  return (
    <div className="featured_container">
      <h1>{props.title}</h1>

      <p>{truncate(props.content, 100)}</p>

      <Link to={singleBlogURL}>Read More</Link>

      <div className="featured_creator_detail">
        <h4>{props.creator}</h4>
        <h4>
          {day} {month} {year}
        </h4>
      </div>
    </div>
  );
};

export default FeaturedTopic;
