import React from 'react';
import Home from './Home.png';
import Friends from './Friends.png';
import Chat from './Chat.png';
import GamingActive from './GamingActive.png';
import GamingSearchBar from './GamingSearchBar.png';
import Profile from './profile-image.png';
import Radio from './radio-image.png';
import Skribbl from './SkribblGameCard.png';
import GarticPhone from './GarticPhoneGameCard.png';

function GamingPage({ onSelectGame }) {
  return (
    <div>

      <div className="gaming-wrapper">
        <img src={GamingSearchBar} alt="Source Bar" className="searchbar-image" />
        <img src={Profile} alt="Profile" className="profile-image" />
        <img src={Radio} alt="Radio" className="radio-image" />
        {/* <h1 className="welcome-title">Welcome to the Game Hub</h1> */}
        {/* <button className="game-button" onClick={() => onSelectGame('game1')}>Go to Game 1</button> */}
        {/* <button className="game-button" onClick={() => onSelectGame('game2')}>Go to Game 2</button> */}
        {/* Add more links to other games if needed */}
        <p className="skribbl-text">Play Skribbl</p>
        <img src={Skribbl} alt="Skribble Game Card" className="skribbl-image" onClick={() => onSelectGame('game1')} />
        <p className="gartic-text">Play Gartic Phone</p>
        <img src={GarticPhone} alt="Gartic Phone Game Card" className="gartic-image" onClick={() => onSelectGame('game2')} />
        <div className="footer-navbar">
          {/* <h1>Testing</h1> */}
          <img src={Home} alt="Home Icon" onClick={() => onSelectGame('home')}/>
          <img src={GamingActive} alt="ActiveGaming Icon" onClick={() => onSelectGame('home2')}/>
          <img src={Chat} alt="Chat Icon"/>
          <img src={Friends} alt="Friends Icon"/>
        </div>
      </div>
      
    </div>
  );
}

export default GamingPage;