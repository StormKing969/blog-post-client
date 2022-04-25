import React, { useState } from "react";
import Axios from "axios";
import "./Compose.scss";

const Compose = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    creator: "",
  });

  function getUserInput(event) {
    const { name, value } = event.target;

    setBlog((prevBlogInput) => {
      return {
        ...prevBlogInput,
        [name]: value,
      };
    });
  }

  function submitBlog(event) {
    event.preventDefault();

    Axios.post("https://react-blog-v1.herokuapp.com/posts", blog).then((response) => {
      console.log("User Created");
    });

    setBlog({
      title: "",
      content: "",
      creator: "",
    });
  }

  return (
    <div className="create_blog">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={getUserInput}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Content"
          onChange={getUserInput}
          rows={5}
        />
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          onChange={getUserInput}
        />
        <button onClick={submitBlog}>Compose</button>
      </form>
    </div>
  );
};

export default Compose;
