import React from 'react'
import './BodyMainMenu.css'
import ButtonMainMenu from "../ButtonMainMenu/ButtonMainMenu"


function BodyMainMenu() {
  return (
    <div className='body-main-menu-container'>
    

        <div className="button-play">
            <ButtonMainMenu name="Play" link="Play"/>
        </div>
    </div>
  )
}

export default BodyMainMenu