import React from 'react'
import './Cards.css'
import { Background } from '@tsparticles/engine'

interface CardProps {
  name: string
  description: string
  image: string
  power: number
  energy: number
  rarity: number

}


function Cards({ name, description, image, power, energy, rarity }: CardProps) {
  const cardStyle = {
    backgroundImage: `${image}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  };
  console.log(cardStyle)

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
  )
}

export default Cards