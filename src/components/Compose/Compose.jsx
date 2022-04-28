import React, { useState } from "react";
import Axios from "axios";
import "./Compose.scss";

const Compose = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    creator: "",
    featured: false
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

    Axios.post("https://react-blog-v1.herokuapp.com/posts", blog).then(
      (response) => {
        console.log("User Created");
      }
    );

    setBlog({
      title: "",
      content: "",
      creator: "",
      featured: false
    });
  }

  return (
    <div className="create_blog">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          onChange={getUserInput}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Content"
          autoComplete="off"
          onChange={getUserInput}
          rows={5}
        />
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          autoComplete="off"
          onChange={getUserInput}
        />
        <div>
        <input
          type="radio"
          name="featured"
          value="true"
          placeholder="Creator"
          onChange={getUserInput}
        />
        <label htmlFor="true">True</label>
        <input
          type="radio"
          name="featured"
          value="false"
          placeholder="Creator"
          onChange={getUserInput}
        />
        <label htmlFor="false">False</label>
        </div>
        <button onClick={submitBlog}>Compose</button>
      </form>
    </div>
  );
};

export default Compose;
