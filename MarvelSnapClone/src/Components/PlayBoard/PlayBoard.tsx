import React from 'react'
import './PlayBoard.css'
import ButtonMainMenu from '../MainMenu/ButtonMainMenu/ButtonMainMenu'
import { useGameContext } from '../../Contexte/GameStates/GameStates'
import { useDeckContext } from '../../Contexte/Deck/Deck'

import CardsVisual from "../Cards/CardsVisual/CardsVisual"

function PlayBoard() {
	console.log('PlayBoard')
	const { setGamestate } = useGameContext()
	const { deck } = useDeckContext()


	function handleClick() {
		setGamestate(false)
	}

	return (
		<>
			<div className='playboard-container'>
				<div className="playboard-deck-container">
					{deck.slice(0,4).map((card, index) => (
						<div className='playboard-card-in-hand'>
							<CardsVisual {...card} />
						</div>
					))}
				</div>


				<div className="playboard-in-ally-container">
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
				</div>
				<div className="playboard-city-container">
					<div className="playboard-city-single-container"></div>
					<div className="playboard-city-single-container"></div>
					<div className="playboard-city-single-container"></div>
				</div>

				<div className="playboard-in-ally-container">
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
					<div className="playboard-in-play-ally-container">
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
						<div className="playerboard-in-play-ally-cards-container"></div>
					</div>
				</div>

				



			</div>

			<div className='playboard-retour-button'>
				<ButtonMainMenu name="Retour" link="/" func={handleClick} />
			</div>
		</>
	)
}

export default PlayBoard