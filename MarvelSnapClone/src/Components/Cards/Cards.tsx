import React from 'react'
import './Cards.css'
import { useState } from 'react'
import CardsVisual from './CardsVisual/CardsVisual'
interface CardProps {
	name: string
	description: string
	image: string
	power: number
	energy: number
	rarity: number
	clickHandler?: (CardInfo: CardProps ) => void
}

const Cards: React.FC<CardProps> = (CardInfo) =>
{
	const { name, description, image, power, energy, rarity, clickHandler } = CardInfo



	function detailCards() {
		clickHandler && clickHandler(CardInfo)
	}
// {image, energy, power, name}
	return (
		<>
			<button onClick={detailCards} className='button-cards-container'>
				<CardsVisual {...CardInfo}/> 
			</button>
		</>
	)
}

export default Cards