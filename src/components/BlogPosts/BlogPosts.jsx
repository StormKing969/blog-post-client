import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Topic from "./Topic/Topic";
import FeaturedTopic from "./FeaturedTopic/FeaturedTopic";
import "./BlogPosts.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

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
    <div className="blog_container">
      <div className="featured_posts">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {blogPosts.map((post) => {
            if (post.featured === true) {
              return (
                <SwiperSlide className="custom_slider">
                  <FeaturedTopic
                    key={post._id}
                    id={post._id}
                    title={post.title}
                    content={post.content}
                    createdAt={post.createdAt}
                    creator={post.creator}
                  />
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </div>
      <div className="blog_posts">
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
    </div>
  );
};

export default BlogPost;
