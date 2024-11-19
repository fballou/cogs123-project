import React from 'react';
import mapPage from './map_page.png';
import HomeActive from './HomeActive.png';
import Friends from './Friends.png';
import Chat from './Chat.png';
import Gaming from './Gaming.png';
import SearchBar from './search_bar.png';

function RealHome({ onSelectGame }) {
  return (
    <div>
        <div className="image-wrapper">
            <img src={SearchBar} alt="Source Bar" className="searchbar-image" />
            {/* <h1 className="welcome-title">Welcome to the Home Page</h1> */}
            <img src={mapPage} alt="Map Page" className="map-image" />
            <div className="footer-navbar">
                {/* <h1>Testing</h1> */}
                <img src={HomeActive} alt="Active Home Icon"/>
                <img src={Gaming} alt="Gaming Icon" onClick={() => onSelectGame('home2')}/>
                <img src={Chat} alt="Chat Icon"/>
                <img src={Friends} alt="Friends Icon"/>
            </div>
        </div>
      
    </div>
  );
}

export default RealHome;