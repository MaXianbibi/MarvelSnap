import React from 'react'
import './Collection.css'

import Cards from '../Cards/Cards'
import CardsVisual from '../Cards/CardsVisual/CardsVisual'
import { useDeckContext } from '../../Contexte/Deck/Deck'



import CardsOnFocus from './CardsOnFocus/CardsOnFocus'
interface CardProps {
	name: string
	description: string
	image: string
	power: number
	energy: number
	rarity: number

	clickHandler?: (CardInfo: CardProps) => void

}

function Collection() {
	const [isFocus, setIsFocused] = React.useState(false)
	const deckContext = useDeckContext()

	function onClickHodler(CardInfo: CardProps) {
		setIsFocused(!isFocus)
	}

	const cardsInfo: CardProps = {
		name: 'Captain America',
		description: '"Au Combat !"',
		image: 'CaptainAmericaHughes.jpg',
		power: 3,
		energy: 2,
		rarity: 0,
		clickHandler: onClickHodler,
	}

	const styleCollectionContainer: React.CSSProperties = {
		filter: `${isFocus ? 'blur(3px) brightness(50%)' : 'none'}`,
	  };
	  

	const styleCardsOnFocus: React.CSSProperties = {
		display: isFocus ? 'block' : 'none',
	}

	function handleMouseUp() {
		setIsFocused(false)
	}

	return (
		<>
			<div style={styleCardsOnFocus} className='cards-on-focus-container' >
				<CardsOnFocus>
					<CardsVisual {...cardsInfo} />
				</CardsOnFocus>
			</div>

			<div className='collection-container' style={styleCollectionContainer} onMouseUp={handleMouseUp}>
				<div className="current-deck-container">
					{deckContext.deck.map((card, index) => (
						<div key={index} className="cards-in-deck-container">
							<CardsVisual {...card} />
						</div>
					))}
					{[...Array(Math.max(0, 16 - deckContext.deck.length))].map((_, index) => (
						<div key={`empty-${index}`} className="cards-in-deck-container"></div>
					))}
				</div>

				<div className="card-in-collection-container">
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
					<Cards {...cardsInfo} />
				</div>
			</div>
		</>
	)
}

export default Collection