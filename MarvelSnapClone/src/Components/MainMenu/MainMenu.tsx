import React from 'react'
import { Link } from 'react-router-dom';
import BodyMainMenu from './BodyMainMenu/BodyMainMenu';
import './MainMenu.css'

function MainMenu() {
  return (
    <>
      <div className='back-ground-main-menu'>
        <BodyMainMenu />
      </div>
    </>
  )
}

export default MainMenu