import React from 'react';
import './App.css';
import showCover from './assets/ManojSpeaksShowCover.jpg';
import applePodcastIcon from './assets/apple-podcast-logo.png';
import spotifyIcon from './assets/spotify-podcast-logo.png';
import radioRepublicIcon from './assets/radiopublic-podcast-icon.png';
function App() {
  return (
<div className="container">
  <div className="left-section">
    <img src={showCover} alt="Manoj Speaks Podcast Cover" className="cover-image" />
  </div>
  <div className="right-section">
  <div className="content-wrapper">
    <p className="main-heading">On air since 2020!</p>
    <p className="sub-description">
      Hi! My name is Manoj Kumar from Sydney (Australia). I dive into conversations with people from around the world (or just to myself!) exploring a wide range of topics—from life and work to hobbies, entrepreneurship, business, relationships, and the latest happenings. No subject is off-limits!
    </p>
    <div className="platform-icons">
      <a href="https://applepodcasts.com" target="_blank" rel="noopener noreferrer">
        <img src={applePodcastIcon} alt="Apple Podcast" className="icon" />
      </a>
      <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
        <img src={spotifyIcon} alt="Spotify" className="icon" />
      </a>
      <a href="https://radiorepublic.com" target="_blank" rel="noopener noreferrer">
        <img src={radioRepublicIcon} alt="Radio Republic" className="icon" />
      </a>
    </div>
    <a href="https://mainplatform.com" className="listen-now">
      Listen Now
    </a>
    <p className="additional-links">
      <a href="https://randomstrangertalk.com" target="_blank" rel="noopener noreferrer">
        Also, listen to me on my 2nd podcast, Random Stranger Talk
      </a>
      <br />
      <a href="https://other-ventures.com" target="_blank" rel="noopener noreferrer">
        Check out my other ventures & activities
      </a>
    </p>
  </div>
  </div>
</div>

  );
}

export default App;
