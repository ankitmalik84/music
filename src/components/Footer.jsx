import React from "react";
import logo from "../images/FS Logo.jpeg";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='foot-container'>
          <div className='owner'>
            <h2>Frontend Showdown Round-2</h2>
          </div>
          <div className='foot-links'>
            <ul>
              <li className='foot-link' style={{ "--i": "0.6s" }}>
                <div>
                  <a href='https://cxi-miet.github.io/Frontend-Showdown/'>
                    <img src={logo} alt='' height='25px' width='25px' />
                  </a>
                </div>
              </li>
              <li className='foot-link' style={{ "--i": "0.6s" }}>
                <div>
                  <a href='https://github.com/ankitmalik84'>
                    <img src={github} alt='' height='25px' />
                  </a>
                </div>
              </li>
              <li className='foot-link' style={{ "--i": "0.6s" }}>
                <div>
                  <a href='https://www.linkedin.com/in/ankitmalik84/'>
                    <img src={linkedin} alt='' height='25px' />
                  </a>
                </div>
              </li>
              <li className='foot-link' style={{ "--i": "0.6s" }}>
                <div>
                  <a href='https://www.instagram.com/ch.ankit.malik/'>
                    <img src={insta} alt='' height='25px' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
