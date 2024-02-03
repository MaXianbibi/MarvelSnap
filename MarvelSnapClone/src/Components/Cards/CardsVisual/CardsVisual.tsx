import React, { useState, useEffect } from 'react';
import imageSrc from './CaptainAmericaHughes.jpg'

import './CardsVisual.css';

interface CardProps {
	name: string
	description: string
	image: string
	power: number
	energy: number
	rarity: number
	clickHandler?: (CardInfo: CardProps ) => void
}


function CardsVisual(CardInfo: CardProps) {

  const { name, description, image, power, energy, rarity, clickHandler } = CardInfo

  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='cards-container' style={cardStyle}>
      <div className='stats-container'>
        <div className='bubble-stats'>
          <p>{energy}</p>
        </div>
        <div className='bubble-stats'>
          <p>{power}</p>
        </div>
      </div>
      <div className='name-container'>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CardsVisual;
