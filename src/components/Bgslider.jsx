import React, { useState } from "react";
import "./Bgslider.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../images/SRL_8275.jpg";
import img2 from "../images/sddefault.webp";
import img3 from "../images/11062b_f1101ad098ad460dbc81d517f366e25e~mv2.jpg";
const Bgslider = () => {
  const slideData = [
    {
      image: img1,
      heading: "Slide 1",
      description: "This is the first slide.",
    },
    {
      image: img2,
      heading: "Slide 2",
      description: "This is the second slide.",
    },
    {
      image: img3,
      heading: "Slide 3",
      description: "This is the third slide.",
    },
  ];
  return (
    <Slide className='slide'>
      {slideData.map((slide, index) => (
        <div className='each-slide' key={index}>
          <div style={{ backgroundImage: `url(${slide.image})` }}>
            <h2>{slide.heading}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Bgslider;
