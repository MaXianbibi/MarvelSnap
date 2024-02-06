import React from 'react'
import './PlayBoard.css'
import ButtonMainMenu from '../MainMenu/ButtonMainMenu/ButtonMainMenu'
import { useGameContext } from '../../Contexte/GameStates/GameStates'
import { useDeckContext } from '../../Contexte/Deck/Deck'

import CardsVisual from "../Cards/CardsVisual/CardsVisual"
import { Card } from 'react-bootstrap'

interface CardProps {
	name: string
	description: string
	image: string
	power: number
	energy: number
	rarity: number
	id: number
	clickHandler?: (CardInfo: CardProps) => void
}

interface CardInHandProps {
	Card: CardProps
	indexInDeck: number
}

function PlayBoard() {
	const { setGamestate } = useGameContext()
	const { deck, removeCard } = useDeckContext()
	const [isCardInHand, setisCardInHand] = React.useState(false)
	const [allies, setAllies] = React.useState<CardProps[][]>([[], [], []]);
	const [cardInHand, setCardInHand] = React.useState<CardInHandProps | null>(null);
	const [tempDeck, setTempDeck] = React.useState<CardProps[]>(deck.slice(0, 4))
	const [indexInMainDeck, setIndexInDeck] = React.useState<number>(4)

	function returnHandleClick() {
		setGamestate(false)
	}

	function clickOnCard(CardInfo: CardProps, indexInDeck: number) {
		setCardInHand({ Card: CardInfo, indexInDeck: indexInDeck });
		setisCardInHand(true)
	}

	const addCard = (newAlly: CardProps, index: number) => {

		if (isCardInHand === false) return;
		if (allies[index].length >= 4) return;
		setAllies(prevAllies => {
			const newAllies = [...prevAllies];
			newAllies[index] = [...newAllies[index], newAlly];
			return newAllies;
		});

		setTempDeck(prevDeck => {
			const newDeck = tempDeck.filter((card) => card.id !== newAlly.id);
			return newDeck;
		});


		setisCardInHand(false)
	};

	function nextTurnHandleClick() {
		setTempDeck(prevDeck => {

			if (indexInMainDeck >= deck.length) {
				return prevDeck;
			}
			console.log(indexInMainDeck);

			const newDeck = [...prevDeck, deck[indexInMainDeck]];
			return newDeck;
		})
		setIndexInDeck(prevIndex => prevIndex + 1);
	}

	const renderAllyContainer = (allyGroup, groupIndex) => (
		<div className="playboard-in-play-ally-container" style={styleInPlayBox} onClick={() => addCard(cardInHand?.Card!, groupIndex)}>
			{allies[groupIndex].map((allyCard, index) => (
				<div key={allyCard.id} className="playerboard-in-play-ally-cards-container">
					<div>
						<CardsVisual {...allyCard} />
					</div>
				</div>
			))}

			{Array.from({ length: 4 - allies[groupIndex].length }).map((_, index) => (
				<div key={`empty-${groupIndex}-${index}`} className="playerboard-in-play-ally-cards-container empty-ally-slot">
				</div>
			))}
		</div>
	);

	const styleInPlayBox = {
		WebkitBoxShadow: isCardInHand ? 'inset 5px 5px 50px 12px rgba(0,24,255,0.25)' : 'none',
		boxShadow: isCardInHand ? 'inset 5px 5px 50px 12px rgba(0,24,255,0.25)' : 'none',
	}

	return (
		<>
			<div className='playboard-container'>
				<div className="playboard-deck-container">
					{tempDeck.map((card, index) => (
						<div className='playboard-card-in-hand' key={card.id} onClick={() => { clickOnCard(card, index) }}>
							<CardsVisual {...card} />
						</div>
					))}
				</div>


				<div className="playboard-in-ally-container">
					{allies.map((allyGroup, index) => renderAllyContainer(allyGroup, index))}
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
				<ButtonMainMenu name="Retour" link="/" func={returnHandleClick} />
			</div>

			<button className='playboard-next-turn-button' onClick={nextTurnHandleClick}>Prochain tour</button>
			<div className="playboard-n-enery-container"></div>
		</>
	)
}

export default PlayBoard