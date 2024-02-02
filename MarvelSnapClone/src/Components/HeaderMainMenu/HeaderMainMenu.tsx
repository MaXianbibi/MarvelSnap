import React from 'react'
import ButtonHeader from './ButtonHeader/ButtonHeader'
import './HeaderMainMenu.css'




function HeaderMainMenu() {
  return (
    
    <div className='header-main-menu-container'>
        <ButtonHeader name="Principal" link="/"/>
        <ButtonHeader name="Collection" link="Collection"/>
        <ButtonHeader name="Niveau 1" link="Level"/>
        <ButtonHeader name="Magasin" link="Magasin"/>
    </div>
  )
}

export default HeaderMainMenu