import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const currentURL = window.location.pathname;

  useEffect(() => {
    Axios.get("http://localhost:5000/posts/" + currentURL).then((response) => {
      setBlog(response.data);
    });
  }, [currentURL]);

  let date = new Date(blog.createdAt);

  let day = date.getDay();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  return (
    <div className="topic">
      <h1>{blog.title}</h1>

      <p>{blog.content}</p>

      <div className="topic_detail">
        <h4>{blog.creator}</h4>
        <h4>
          {day} {month} {year}
        </h4>
      </div>
    </div>
  );
};

export default SingleBlog;
