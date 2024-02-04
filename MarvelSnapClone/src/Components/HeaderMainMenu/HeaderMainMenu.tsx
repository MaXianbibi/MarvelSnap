import React from 'react'
import ButtonHeader from './ButtonHeader/ButtonHeader'
import './HeaderMainMenu.css'
import { useGameContext } from '../../Contexte/GameStates/GameStates'

function HeaderMainMenu() {
	const { gameState } = useGameContext();


	const styleHeader: React.CSSProperties = {
		display: `${!gameState ? 'flex' : 'none'}`,
	};


	return (
		<div className='header-main-menu-container' style={styleHeader}>
			<ButtonHeader name="Principal" link="/" />
			<ButtonHeader name="Collection" link="Collection" />
			<ButtonHeader name="Niveau 1" link="Level" />
			<ButtonHeader name="Magasin" link="Magasin" />
		</div>
	)
}

export default HeaderMainMenu