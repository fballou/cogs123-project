import React, { useState } from 'react';
import GamingPage from './gaming';
import Game1 from './game1';
import Game2 from './game2';
import Game3 from './game3';
import Game4 from './game4';
import Game5 from './game5';
import RealHome from './home';
import LeaderBoardPage from './leaderboard';
import JoinPage from './join';
import JoinInstructions from './join_instructions';
import CreateInstructions from './create_instructions';

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
      {currentView === 'home' && <RealHome onSelectGame={handleSelectGame} />}
      {currentView === 'home2' && <GamingPage onSelectGame={handleSelectGame} />}
      {currentView === 'game1' && <Game1 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game2' && <Game2 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game3' && <Game3 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game4' && <Game4 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'game5' && <Game5 onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'leaderboard' && <LeaderBoardPage onBack={handleGoToSecondHome} onSelectGame={handleSelectGame}/>}
      {currentView === 'join' && <JoinPage onSelectGame={handleSelectGame} />}
      {currentView === 'join_instructions' && <JoinInstructions onSelectGame={handleSelectGame} />}
      {currentView === 'create_instructions' && <CreateInstructions onSelectGame={handleSelectGame} />}

    </div>
  );
}

export default App;