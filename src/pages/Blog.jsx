import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Blog.css";
import img1 from "../images/music-therapy-for-weight-loss-main.jpg";
import img2 from "../images/older-lady-listening-to-music-on-headphones.jpg";
import img3 from "../images/jaycee-music-therapy-0037.jpg";
import img4 from "../images/245711_08ed8dd5734e4bb69b736f26e36683a3~mv2.webp";
import img5 from "../images/245711_2b9642059cb748fb9942818280f3bf3a~mv2.webp";
import img6 from "../images/646795-music.jpg";
import img7 from "../images/gpjnews-nepal-kk-music-therapy-33-web-jpg.jpg";
import img8 from "../images/jaycee-music-therapy-0017.jpg";
import img9 from "../images/jaycee-music-therapy-0082.jpg";

import BlogDetails from "../components/Blogdetail";

const cards = [
  {
    image: img1,
    title: "The Science Behind Music Therapy",
    text: "Learn about the neurological and psychological mechanisms that underlie the effectiveness of music therapy",
    description:
      "Perhaps you're down or worried - maybe you're unsure about the future of a relationship, or just feel that you aren't living the life you were meant to lead. Whatever your needs are, Santosh Ghatpande is here to support you. He is known for providing the best Music Therapy Services in India. He is aware of growth and self-discovery technique. In his personalized counselling sessions, he promotes behavioral transformation by encouraging a positive outlook and the adoption of new attitudes and reactions. He possesses the tools and professional experience to help depressed individuals get back on track.  ",
  },
  {
    image: img2,
    title: "Different Types of Music Therapy: Finding the Right Approach",
    text: "Explore the various approaches to music therapy, from active music-making to receptive listening",
    description:
      "Perhaps you're down or worried - maybe you're unsure about the future of a relationship, or just feel that you aren't living the life you were meant to lead. Whatever your needs are, Santosh Ghatpande is here to support you. He is known for providing the best Music Therapy Services in India. He is aware of growth and self-discovery technique. In his personalized counselling sessions, he promotes behavioral transformation by encouraging a positive outlook and the adoption of new attitudes and reactions. He possesses the tools and professional experience to help depressed individuals get back on track.  ",
  },
  {
    image: img3,
    title: "Music Therapy for Mental Health",
    text: "Discover how music therapy can be used to alleviate symptoms of anxiety and depression and learn about evidence-based techniques",
    description:
      "Perhaps you're down or worried - maybe you're unsure about the future of a relationship, or just feel that you aren't living the life you were meant to lead. Whatever your needs are, Santosh Ghatpande is here to support you. He is known for providing the best Music Therapy Services in India. He is aware of growth and self-discovery technique. In his personalized counselling sessions, he promotes behavioral transformation by encouraging a positive outlook and the adoption of new attitudes and reactions. He possesses the tools and professional experience to help depressed individuals get back on track.  ",
  },
  {
    image: img4,
    title: "Music Therapy for Children: Enhancing Development",
    text: "Explore the ways in which music therapy can support the cognitive, social, and emotional development of children",
    description: "",
  },
  {
    image: img5,
    title: "Music Therapy in Palliative Care: Providing Comfort",
    text: "Learn about the role of music therapy in hospice and palliative care, and how it can help alleviate physical",
    description: "",
  },
  {
    image: img6,
    title: "Music Therapy and Addiction: Supporting Recovery ",
    text: "Discover how music therapy can be integrated into addiction treatment programs to support recovery, reduce stress",
    description: "",
  },
  {
    image: img7,
    title: "Music Therapy for Seniors: Improving Quality",
    text: "Explore the ways in which music therapy can enhance the well-being of older adults, promote social engagement",
    description: "",
  },
  {
    image: img8,
    title: "Music Therapy in Schools: Enhancing Learning",
    text: "Learn about the benefits of music therapy in educational settings, including improved academic performance",
    description: "",
  },
  {
    image: img9,
    title: "Music Therapy for Chronic Pain: Managing Symptoms",
    text: "Discover how music therapy can help manage chronic pain, reduce anxiety and depression associated with pain",
    description: "",
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (index) => {
    setSelectedBlog(cards[index]);
  };

  const handleGoBack = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='text-center my-4'>Blogs</h1>
        {selectedBlog ? (
          <BlogDetails
            heading='Blog Details'
            image={selectedBlog.image}
            title={selectedBlog.title}
            text={selectedBlog.description}
          />
        ) : (
          <div className='row'>
            {cards.map((card, index) => (
              <div key={index} className='col-md-4 my-2'>
                <div
                  className='card'
                  data-aos='flip-down'
                  data-aos-delay='1s'
                  data-aos-anchor-placement='bottom'
                >
                  <img
                    src={card.image}
                    className='card-img-top'
                    alt='card-img'
                  />
                  <div className='card-body'>
                    <h2 className='card-title'>{card.title}</h2>
                    <p className='card-text'>{card.text}</p>
                    <div className='text-box'>
                      <button
                        className='btn btn-white btn-animate'
                        onClick={() => handleReadMore(index)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedBlog && (
          <div className='text-center-low'>
            <a
              href='#blog'
              className='btn btn-white btn-animate back-button'
              onClick={handleGoBack}
            >
              Go Back
            </a>
          </div>
        )}
      </div>
      <div>
        <Footer className='footer' />
      </div>
    </>
  );
};

export default Blog;
