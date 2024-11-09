import React from 'react';
import './App.css';
import showCover from './assets/ManojSpeaksShowCover.jpg';
import applePodcastIcon from './assets/apple-podcast-logo.png';
import spotifyIcon from './assets/spotify-podcast-logo.png';
import radioRepublicIcon from './assets/radiopublic-podcast-icon.png';
import envelopeIcon from './assets/Email-Icon.png';

function App() {
  return (
    <div className="container">
      <div className="show-cover">
        <img src={showCover} alt="Manoj Speaks Podcast Cover" className="cover-image" />
      </div>
      <div className="content">
        <p className="description">
          A podcast channel hosted by Manoj Kumar. Based in Sydney (Australia), I talk to people from around the world on random topics such as life, people's jobs & hobbies, entrepreneurship, business, relationships, How-to, current events - anything! If I can't find anyone, I talk to myself.
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
        <div className="social-icons">
          <a href="mailto:contact@manoj-speaks.com">
            <img src={envelopeIcon} alt="Contact" />
          </a>
        </div>
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
  );
}

export default App;
