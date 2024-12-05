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
import SkribblImg from './skribbl_img.png';

function JoinPage({ onSelectGame }) {
  return (
    <div>

      <div className="gaming-wrapper4">
        <div className="joining-page">
            <img src={SkribblImg} alt="Skribbl Img" className="skribbl-img" />
            <button className="game-buttons" onClick={() => onSelectGame('join_instructions')}>Join Game</button>
            <button className="game-buttons" onClick={() => onSelectGame('create_instructions')}>Create Game</button>
        </div>
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

export default JoinPage;