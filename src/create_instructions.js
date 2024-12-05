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
import JoinImg from './join_game.png';
import CreateImg from './create_game.png';

function CreateInstructions({ onSelectGame }) {
  return (
    <div>

      <div className="gaming-wrapper5">
        <div className="joining-instructions">
            <h1 className="instructions-header">Instructions For How To Create a Game</h1>
            {/* <img src={JoinImg} alt="Join Instructions" className="instructions-img"/> */}
        </div>
        <img src={CreateImg} alt="Create Instructions" className="instructions-img"/>

        <div className="continue-wrapper">
            <button className="continue-button" onClick={() => onSelectGame('home2')}>Continue</button>
        </div>
        

        <div className="footer-navbar">
          <img src={Home} alt="Home Icon" onClick={() => onSelectGame('home')}/>
          <img src={GamingActive} alt="ActiveGaming Icon" onClick={() => onSelectGame('join')}/>
          <img src={Chat} alt="Chat Icon"/>
          <img src={Leaderboard} alt="Leaderboard Icon" onClick={() => onSelectGame('leaderboard')}/>
        </div>
      </div>
      
    </div>
  );
}

export default CreateInstructions;