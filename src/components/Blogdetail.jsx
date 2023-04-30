import React from "react";
import "./Blogdetail.css";
const BlogDetails = ({ image, title, text }) => {
  return (
    <div
      className='blog-container'
      data-aos='flip-right'
      data-aos-easing='ease-in-out'
    >
      <div className='row'>
        <div className='col-lg-8 offset-lg-2 col-md-10 offset-md-1'>
          <div className='blog-head'>
            <img
              src={image}
              className='img-fluid'
              alt={title}
              data-aos='fade-left'
              data-aos-easing='ease-in-out'
            />
            <h2>{title}</h2>
          </div>
          <p className='desc' data-aos='zoom-in' data-aos-easing='ease-in-out'>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
