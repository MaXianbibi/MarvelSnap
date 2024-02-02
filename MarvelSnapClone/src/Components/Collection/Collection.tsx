import React from 'react'
import './Collection.css'
import DraggableContainer from './DraggableContainer/DraggableContainer'
import DragDropContainer from './DraggableContainer/DraggableContainer';

import Cards from '../Cards/Cards'

function Collection() {
  return (


    <div className='collection-container'>
      <div className="current-deck-container">
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
        <div className='cards-in-deck-container'></div>
      </div>
      <div className="card-in-collection-container">
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
        <Cards name="Captain America" description='mf' image="CaptainAmericaHughes.jpg" power={3} energy={2} rarity={0} />
      </div>
    </div>

  )
}

export default Collection