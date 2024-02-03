import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './Components/MainMenu/MainMenu';
import Collection from './Components/Collection/Collection';
import './App.css';

import { DeckContextProvider } from './Contexte/Deck/Deck';

import HeaderMainMenu from './Components/HeaderMainMenu/HeaderMainMenu';

function App() {
  return (
    <DeckContextProvider>
      <div className='app-style'>
        <HeaderMainMenu />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </div>
    </DeckContextProvider>
  );
}

export default App;
