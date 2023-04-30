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
      "One of the ways music therapy works is through the release of endorphins in the brain. Endorphins are natural chemicals that are produced in the brain and are associated with pain relief and feelings of pleasure. Listening to music can trigger the release of endorphins, which can help to reduce stress, anxiety, and depression.Music therapy can also help to stimulate the brain in ways that can promote cognitive function. For example, playing a musical instrument can help to develop fine motor skills and hand-eye coordination. ",
  },
  {
    image: img2,
    title: "Different Types of Music Therapy: Finding the Right Approach",
    text: "Explore the various approaches to music therapy, from active music-making to receptive listening",
    description:
      "Music therapy is a flexible and adaptable therapy that can be tailored to meet the unique needs of each individual. There are many different types of music therapy, and the right approach will depend on the specific goals and needs of the individual.Here are some of the different types of music therapy:Receptive Music Therapy,Active Music Therapy,Improvisational Music Therapy,Music-assisted Relaxation,Music-assisted Meditation,Songwriting.The right approach to music therapy will depend on the individual's needs and goals.",
  },
  {
    image: img3,
    title: "Music Therapy for Mental Health",
    text: "Discover how music therapy can be used to alleviate symptoms of anxiety and depression and learn about evidence-based techniques",
    description:
      "Music therapy can be an effective treatment approach for individuals struggling with mental health challenges. The therapeutic use of music can help to improve mood, reduce anxiety, and promote relaxation. Here are some ways music therapy can be used to address mental health concerns: Mood regulation,Stress reduction,Self-expression,Cognitive restructuring,Social interaction.Overall, music therapy can be a valuable tool for addressing mental health concerns. By promoting mood regulation, stress reduction, self-expression, cognitive restructuring",
  },
  {
    image: img4,
    title: "Music Therapy for Children: Enhancing Development",
    text: "Explore the ways in which music therapy can support the cognitive, social, and emotional development of children",
    description:
      "Music therapy is a type of therapy that uses music to address physical, emotional, cognitive, and social needs of individuals. In the case of children, music therapy can be a powerful tool for enhancing their development and addressing various challenges they may face.Music therapy can help children with a range of conditions and challenges, including developmental delays, autism spectrum disorder, attention deficit hyperactivity disorder (ADHD), anxiety, depression, and trauma.",
  },
  {
    image: img5,
    title: "Music Therapy in Palliative Care: Providing Comfort",
    text: "Learn about the role of music therapy in hospice and palliative care, and how it can help alleviate physical",
    description:
      "Music therapy is a type of therapy that uses music to help individuals cope with various physical, emotional, and cognitive challenges. In palliative care, music therapy is used to provide comfort and support to individuals who are nearing the end of their lives Music has the ability to elicit emotional responses in individuals and can be used to help individuals process difficult emotions and feelings. It can also be used to provide a sense of relaxation and comfort, which can be particularly helpful for individuals who are experiencing pain and discomfort.",
  },
  {
    image: img6,
    title: "Music Therapy and Addiction ",
    text: "Discover how music therapy can be integrated into addiction treatment programs to support recovery, reduce stress",
    description:
      "Music therapy can be used to address a range of challenges that individuals with addiction may face, including anxiety, depression, trauma, and cravings. Through music, individuals can learn to express themselves in healthy ways, regulate their emotions, and build coping skills.For individuals in recovery, music therapy can provide a sense of comfort and support, helping them to deal with the emotional challenges that can arise during the recovery process. Music can also provide a positive outlet for emotions, helping individuals to process their feelings without turning to drugs or alcohol.",
  },
  {
    image: img7,
    title: "Music Therapy for Seniors: Improving Quality",
    text: "Explore the ways in which music therapy can enhance the well-being of older adults, promote social engagement",
    description:
      "Music therapy can be used to address a range of challenges that seniors may face, including dementia, Alzheimer's disease, depression, loneliness, and anxiety. Through music, seniors can engage in meaningful activities, express themselves, and connect with others.For seniors with dementia or Alzheimer's disease, music therapy can be particularly effective. Music has the ability to evoke memories and emotions, and can be used to stimulate the brain and improve cognitive function. Through singing and playing instruments, seniors can engage in stimulating activities that promote brain health and enhance memory.",
  },
  {
    image: img8,
    title: "Music Therapy in Schools: Enhancing Learning",
    text: "Learn about the benefits of music therapy in educational settings, including improved academic performance",
    description:
      "Music therapy can be used to address a range of challenges that students may face, including attention deficits, behavioral issues, anxiety, and depression. Through music, students can learn to regulate their emotions, focus their attention, and build social connections.For students with attention deficits, music therapy can be particularly effective. Music has the ability to stimulate the brain and improve focus, making it a powerful tool for students who struggle with concentration. ",
  },
  {
    image: img9,
    title: "Music Therapy for Chronic Pain: Managing Symptoms",
    text: "Discover how music therapy can help manage chronic pain, reduce anxiety and depression associated with pain",
    description:
      "Chronic pain is a complex condition that can be challenging to manage. Traditional treatments such as medication and physical therapy may not always provide relief, and can sometimes have unwanted side effects. Music therapy offers an alternative approach that can be effective in managing symptoms and improving quality of life.Music therapy can be used to address a range of physical and emotional symptoms associated with chronic pain.",
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
