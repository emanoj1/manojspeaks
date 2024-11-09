import React from 'react';
import './App.css';
import showCover from './assets/ManojSpeaksShowCover.jpg';
import applePodcastIcon from './assets/apple-podcast-logo.png';
import spotifyIcon from './assets/spotify-icon.png';
import radioRepublicIcon from './assets/radiopublic-podcast-icon.png';
import podChaserIcon from './assets/podchaser_logo.jpeg';

function App() {
  return (
<div className="container">
  <div className="left-section">
    <img src={showCover} alt="Manoj Speaks Podcast Cover" className="cover-image" />
  </div>
  <div className="right-section">
  <div className="content-wrapper">
    <p className="main-heading">On-air since 2020!</p>
    <p className="sub-description">
      Hi! My name is Manoj Kumar from Sydney (Australia). I dive into conversations with people from around the world (or just to myself!) exploring a wide range of topics—from life and work to hobbies, entrepreneurship, business, relationships, and the latest happenings. No subject is off-limits!
    </p>
    <div className="platform-icons">
      <a href="https://podcasts.apple.com/us/podcast/manoj-speaks/id1508103734?uo=4" target="_blank" rel="noopener noreferrer">
        <img src={applePodcastIcon} alt="Apple Podcast" className="icon" />
      </a>
      <a href="https://open.spotify.com/show/0Y0M6w4xyHJcD0qBM5yvnT" target="_blank" rel="noopener noreferrer">
        <img src={spotifyIcon} alt="Spotify" className="icon" />
      </a>
      <a href="https://radiopublic.com/manoj-speaks-6n0kME" target="_blank" rel="noopener noreferrer">
        <img src={radioRepublicIcon} alt="Radio Republic" className="icon" />
      </a>
      <a href="https://www.podchaser.com/podcasts/manoj-speaks-1968371" target="_blank" rel="noopener noreferrer">
        <img src={podChaserIcon} alt="Podchaser" className="icon" />
      </a>
    </div>
    <a href="https://podcasters.spotify.com/pod/show/manojspeaks" className="listen-now">
      See the full list of episodes so far!
    </a>
    <p className="additional-links">
      <a href="https://randomstrangertalk.com" target="_blank" rel="noopener noreferrer">
        Also, I have another podcast: Random Stranger Talk
      </a>
      <br />
      <a href="https://bento.me/emanoj" target="_blank" rel="noopener noreferrer">
        Check out my other ventures, hobbies & activities!
      </a>
      <br />
      <a href="https://tally.so/r/w8qkjP" target="_blank" rel="noopener noreferrer">
      For inquiries, feel free to visit my contact page here.
      </a>
    </p>
  </div>
  </div>
</div>

  );
}

export default App;
