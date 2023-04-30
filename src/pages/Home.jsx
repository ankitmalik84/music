import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./home.css";
// import Bgslider from "../components/Bgslider";
import Navbar from "../components/Navbar";
import img1 from "../images/SRL_8275.jpg";
import img2 from "../images/11062b_f1101ad098ad460dbc81d517f366e25e~mv2.jpg";
import img3 from "../images/sddefault.webp";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero' data-aos='fade-left' data-aos-easing='ease-in-out'>
        <div className='hero-img'>
          <img src={img1} alt='image' />
          <div className='hero-text'>
            <h2>Music Thearpy</h2>
            <p>This is the best way of the text</p>
          </div>
        </div>
      </div>
      <div
        className='description'
        id='description'
        data-aos='fade-right'
        data-aos-duration='1s'
        data-aos-direction='reverse'
        data-aos-interpolation='bounce'
        data-aos-timing='ease-in-out'
        data-aos-delay='0.5s'
      >
        <div
          className='description-img'
          data-aos='fade-left'
          data-aos-delay='2.5s'
        >
          <img src={img2} alt='image' className='big-img' />
          <img src={img3} alt='image' className='small-img' />
        </div>
        <div className='description-text' id='description'>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            pharetra nisl. Praesent gravida, velit non ullamcorper dapibus,
            turpis risus tincidunt massa, ac vehicula sapien orci non leo.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Praesent vel orci quis turpis bibendum
            ullamcorper. Vestibulum nec mi at nisl rutrum ultrices. In sit amet
            ullamcorper ante.
          </p>
        </div>
      </div>
      <img src={img1} alt='history bakcgorund image' />
      <div className='history'>
        <div className='history-img'>
          <img src={img1} alt='image' />
        </div>
        <div className='history-text'>
          <h3>History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            pharetra nisl. Praesent gravida, velit non ullamcorper dapibus,
            turpis risus tincidunt massa, ac vehicula sapien orci non leo.
          </p>
        </div>
      </div>
      <div className='blogredirect'>
        <h1>To see the blog review click here</h1>
        <button></button>
      </div>
      <div className='footer'>
        <div className='footer-img'>
          <img src={img2} alt='image' />
          <div className='footer-link'>
            <ul>
              <li>
                <a href=''></a>
              </li>
              <li>
                <a href=''></a>
              </li>
              <li>
                <a href=''></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
