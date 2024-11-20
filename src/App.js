import React, { useState } from 'react';
import GamingPage from './gaming';
import Game1 from './game1';
import Game2 from './game2';
import Game3 from './game3';
import Game4 from './game4';
import Game5 from './game5';
import RealHome from './home';

function App() {
  const [currentView, setCurrentView] = useState('home');

  // Function to handle navigation
  const handleSelectGame = (view) => {
    setCurrentView(view);
  };

  // Function to go back to the home page
  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleGoToSecondHome = () => {
    setCurrentView('home2');
  };

  return (
    <div>
      {currentView === 'home' && <RealHome onSelectGame={handleGoToSecondHome} />}
      {currentView === 'home2' && <GamingPage onSelectGame={handleSelectGame} />}
      {currentView === 'game1' && <Game1 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game2' && <Game2 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game3' && <Game3 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game4' && <Game4 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game5' && <Game5 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
    </div>
  );
}

export default App;