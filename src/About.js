import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div>
      {/* const customstyle= {
        "color": "#45a29e"
      } */}
      <Navbar />
      <header>
        <h1>About Us</h1>
      </header>

      <section>
        <h2>Our Team</h2>
        <p>We are a dedicated team of individuals working together to bring you the best content and solutions.</p>

        <div id="team-members">
          <p><strong>Shankar</strong> - GPT 1Y</p>
          <p><strong>Swastic</strong> - GPT 1Y</p>
          <p><strong>Shruti</strong> - GPT 1Y</p>
          <p><strong>Suhani</strong> - GPT 1Y</p>
        </div>
      </section>
    </div>
  );
};




export default AboutUs;
