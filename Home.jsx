import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Category from './categories';
import './Home.css';

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from your backend when the component mounts
    fetch('/api/home') // Replace '/api/tweets' with the actual API endpoint
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((error) => console.error('Error fetching tweets:', error));
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <>
      <Navbar />
      <Category />
      <div className="cont">
        <container>
          {tweets.map((tweet, index) => (
            <div key={index} className="pov">
              <h1 id="type" className="cat">
                {tweet.type}
              </h1>
              <p id="desc" className="des">
                {tweet.post_desc}
              </p>
              <div class="btn">
                <button>upvote</button>
              </div>
            </div>
          ))}
        </container>
      </div>
      <div>
        <button class="post" type="button" >
          +
        </button >
      </div>
    </>
  );
}

export default Home;
