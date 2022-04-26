import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Topic from "./Topic/Topic";
import "./BlogPosts.scss";

const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Axios.get("https://react-blog-v1.herokuapp.com/posts").then((response) => {
      setBlogPosts(response.data);
    });
  }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/posts").then((response) => {
  //     setBlogPosts(response.data);
  //   });
  // }, []);

  return (
    <div className="blog_post">
      {blogPosts.map((item) => {
        return (
          <Topic
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
            createdAt={item.createdAt}
            creator={item.creator}
          />
        );
      })}
    </div>
  );
};

export default BlogPost;
