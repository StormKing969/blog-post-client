import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const currentURL = window.location.pathname;

  useEffect(() => {
    Axios.get("https://react-blog-v1.herokuapp.com/posts/post" + currentURL).then((response) => {
      setBlog(response.data);
    });
  }, [currentURL]);

  let date = new Date(blog.createdAt);

  let day = date.getDay();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  return (
    <div className="topic">
      {blog.title ? (
        <>
          <h1>{blog.title}</h1>

          <p>{blog.content}</p>

          <div className="topic_detail">
            <h4>{blog.creator}</h4>
            <h4>
              {day} {month} {year}
            </h4>
          </div>
        </>
      ) : (
        <>
          <h1>{blog.title}</h1>

          <p>Invalid Link</p>

          <div className="topic_detail">
            <Link to="/">Back To Homepage</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBlog;
