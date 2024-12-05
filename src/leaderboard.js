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
// import Leaderboard from './leaderboard_image.png';
import LeaderBoardActive from './leaderboard_active.png';
import Gaming from './Gaming.png';

import Jenna from './Jenna.png';
import Hana from './Hana.png';
import Anson from './Anson.png';
import Fadi from './Fadi.png';
import Ryan from './Ryan.png';
import You from './You.png';

import Info from './info_icon.png';
import GamingPage from './gaming';

function LeaderBoardPage({ onSelectGame }) {
  return (
    <div>

      <div className="gaming-wrapper3">
        <div className="leaderboard-header">
            <h1 className="leaderboard">Leaderboard</h1>
            <img src={Info} alt="Info Icon" />
        </div>

        <div className="leaderboard-players">
            <img src={Jenna} alt="Jenna's Place" />
            <img src={Hana} alt="Hana's Place" />
            <img src={Anson} alt="Anson's Place" />
            <img src={Fadi} alt="Fadi's Place" />
            <img src={Ryan} alt="Ryan's Place" />
            <img src={You} alt="Your Place" className="your-place"/>
        </div>
        
        <div className="footer-navbar">
          {/* <h1>Testing</h1> */}
          <img src={Home} alt="Home Icon" onClick={() => onSelectGame('home')}/>
          <img src={Gaming} alt="ActiveGaming Icon" onClick={() => onSelectGame('join')}/>
          <img src={Chat} alt="Chat Icon"/>
          <img src={LeaderBoardActive} alt="Leaderboard Icon"/>
        </div>
      </div>
      
    </div>
  );
}

export default LeaderBoardPage;