import React from 'react'
import './BodyMainMenu.css'
import ButtonMainMenu from "../ButtonMainMenu/ButtonMainMenu"
import { useGameContext } from '../../../Contexte/GameStates/GameStates'

function BodyMainMenu() {

  const { setGamestate } = useGameContext();


  function onClickHandler() {
    setGamestate(true)
  }

  return (
    <div className='body-main-menu-container'>
        <div className="button-play">
            <ButtonMainMenu name="Play" link="PlayBoard" func={onClickHandler}/>
        </div>
    </div>
  )
}

export default BodyMainMenu