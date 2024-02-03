import React from 'react'
import './Collection.css'

import Cards from '../Cards/Cards'
import CardsVisual from '../Cards/CardsVisual/CardsVisual'


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

  function onClickHodler(CardInfo: CardProps) {
    console.log(CardInfo)
    setIsFocused(!isFocus)
  }

  const cardsInfo: CardProps = {
    name: 'Captain America',
    description: 'Au Combat !',
    image: 'CaptainAmericaHughes.jpg',
    power: 3,
    energy: 2,
    rarity: 0,
    clickHandler: onClickHodler,
  }

  const styleCollectionContainer: React.CSSProperties = {
    filter: isFocus ? 'blur(3px)' : 'none',
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
        <CardsOnFocus description={cardsInfo.description}>
          <CardsVisual {...cardsInfo}/>
        </CardsOnFocus>
      </div>

      <div className='collection-container' style={styleCollectionContainer} onMouseUp={handleMouseUp}>
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
          <Cards {...cardsInfo} />
        </div>



      </div>
    </>
  )
}

export default Collection