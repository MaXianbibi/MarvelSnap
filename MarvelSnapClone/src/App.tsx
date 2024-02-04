import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './Components/MainMenu/MainMenu';
import Collection from './Components/Collection/Collection';
import './App.css';
import PlayBoard from './Components/PlayBoard/PlayBoard';

import { DeckContextProvider } from './Contexte/Deck/Deck';
import { GameContextProvider } from './Contexte/GameStates/GameStates';


import HeaderMainMenu from './Components/HeaderMainMenu/HeaderMainMenu';

function App() {
  return (
    <GameContextProvider>
      <DeckContextProvider>
        <div className='app-style'>
          <HeaderMainMenu />
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/PlayBoard" element={<PlayBoard />} />
          </Routes>
        </div>
      </DeckContextProvider>
    </GameContextProvider>
  );
}

export default App;
