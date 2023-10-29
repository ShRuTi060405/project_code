import React, { useState } from 'react';
import './Faq.css'; // Import your CSS file
import Navbar from './Navbar';

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  const faqData = [
    {
      question: 'Who are we?',
      answer: 'We are some dumb peoplr trying to learn and bring are idea to a webpage hopefully  ',
    },
    {
      question: 'what are we building?',
      answer: 'A website kind-of like reddit/twitter/quora exclusively for IITR-Junta, the main thing is people will be able to put forward their campus-related problems and other people can also upvote it if they find it concerning, and when we get the database of the whole campus junta and credentials ,we will try to give special features to then-secy of the respective categories and try to bring the concerning problem to their notices',
    },
    {
      question: 'What are the different sections?',
      answer: 'We have the General-section, where anyone can post about anything, other sections will be specific to their topics , like we will have a animalcares section   ',
    },
    {
      question: 'Future Aspect?',
      answer: 'A social-media platform, connecting all IITR-Junta from final year to freshers , we would also want to add mtech and phd students later-on ',
    },
    
    {
      question: '?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    },
  ];

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              id={`accordion-button-${index}`}
              aria-expanded={expanded === index}
            >
              <span className="accordion-title">{faq.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${expanded === index ? 'expanded' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Faq;
