import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './Components/MainMenu/MainMenu';
import Collection from './Components/Collection/Collection';
import './App.css';

import HeaderMainMenu from './Components/HeaderMainMenu/HeaderMainMenu';

function App() {
  return (
    <div className='app-style'>


      <HeaderMainMenu />
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/Collection" element={<Collection/>} />
      </Routes>
    </div>
  );
}

export default App;
