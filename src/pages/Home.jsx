import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import img1 from "../images/SRL_8275.jpg";
import img2 from "../images/11062b_f1101ad098ad460dbc81d517f366e25e~mv2.jpg";
import img3 from "../images/sddefault.webp";
import Footer from "../components/Footer";
import logo from "../images/micon.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero' data-aos='fade-left' data-aos-easing='ease-in-out'>
        <div className='hero-img'>
          <img src={img1} alt='no found' />
          <div className='hero-text'>
            <h2>Music Therapy</h2>
            <p>
              Music therapy is a clinical and evidence-based practice that uses
              the therapeutic and healing qualities of music to address
              physical, emotional, cognitive, and social needs of individuals.
              It is a creative and versatile form of therapy that can be
              tailored to meet the unique needs of each individual.
            </p>
          </div>
        </div>
      </div>
      <div
        className='description'
        id='description'
        data-aos='zoom-in'
        data-aos-easing='ease-in-out'
      >
        <div className='description-img'>
          <img
            src={img2}
            alt='no found'
            className='big-img'
            data-aos='flip-left'
            data-aos-easing='ease-in-out'
          />
          <img
            src={img3}
            alt='no found'
            className='small-img'
            data-aos='flip-right'
            data-aos-easing='ease-in-out'
          />
        </div>
        <div className='description-text' id='description'>
          <h3>
            Description{" "}
            <span>
              <img src={logo} alt='' className='textlogo' />
            </span>
          </h3>
          <p>
            Music therapy is a healthcare profession that uses music to address
            physical, emotional, cognitive, and social needs. It involves a
            range of techniques, from active music-making to receptive
            listening, and can be used to promote relaxation, reduce stress,
            improve mood, enhance communication, and support physical and
            emotional healing. Music therapists work with people of all ages and
            backgrounds, including those with mental health disorders,
            neurological conditions, physical disabilities, and chronic
            illnesses.
          </p>
        </div>
      </div>
      {/* <img src={img1} alt='history bakcgorund image' className='bghistory' /> */}
      <div className='history' data-aos='zoom-in' data-aos-easing='ease-in-out'>
        <div className='history-text'>
          <h3>
            History{" "}
            <span>
              <img src={logo} alt='' className='textlogo' />
            </span>
          </h3>
          <p>
            Music therapy has a rich history that spans back centuries. The
            ancient Greeks and Romans recognized the therapeutic benefits of
            music and used it in healing rituals. In the 18th and 19th
            centuries, music was used in psychiatric hospitals as a means of
            calming patients and reducing agitation. The modern field of music
            therapy emerged during World War II, when musicians began playing
            for wounded soldiers in hospitals.It wasn't until the 1950s that
            music therapy became a formalized profession, with the establishment
            of academic programs and professional organizations.
          </p>
        </div>
        <div className='history-img'>
          <img src={img1} alt='no found' />
        </div>
      </div>
      <div className='big-foot'>
        <h1>Designed By- Ankit Malik</h1>
      </div>
      <Footer className='footer' />
    </>
  );
};

export default Home;
