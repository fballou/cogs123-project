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
import Leaderboard from './leaderboard_image.png';

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
        <img src={Skribbl} alt="Skribbl Game Card" className="skribbl-image" onClick={() => onSelectGame('game1')} />
        {/* <p className="gartic-text">Play Gartic Phone</p> */}
        <img src={Skribbl} alt="Skribbl Game Card" className="gartic-image" onClick={() => onSelectGame('game2')} />
        <img src={Skribbl} alt="Skribbl Game Card" className="skribbl-image2" onClick={() => onSelectGame('game3')} />
        <img src={Skribbl} alt="Skribbl Game Card" className="skribbl-image3" onClick={() => onSelectGame('game4')} />
        <img src={Skribbl} alt="Skribbl Game Card" className="skribbl-image4" onClick={() => onSelectGame('game5')} />
        <div className="footer-navbar">
          {/* <h1>Testing</h1> */}
          <img src={Home} alt="Home Icon" onClick={() => onSelectGame('home')}/>
          <img src={GamingActive} alt="ActiveGaming Icon" onClick={() => onSelectGame('join')}/>
          <img src={Chat} alt="Chat Icon"/>
          <img src={Leaderboard} alt="Leaderboard Icon" onClick={() => onSelectGame('leaderboard')}/>
        </div>
      </div>
      
    </div>
  );
}

export default GamingPage;