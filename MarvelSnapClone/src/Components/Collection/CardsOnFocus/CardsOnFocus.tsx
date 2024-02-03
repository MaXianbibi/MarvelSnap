import React from 'react'
import './CardsOnFocus.css'
import {useDeckContext} from '../../../Contexte/Deck/Deck'

function CardsOnFocus({children}) {
    const [isFull, setIsFull] = React.useState(false)
    const deckContext = useDeckContext()
    function onClickHodler() {
        deckContext.addCard(children.props)
        if (deckContext.isFull()) {
            setIsFull(true)
        }
    }

  return (
    <div className='cards-on-focus-container'>
        <div className='cards-on-focus-child-container'>
            <div className='visuel-card-container-on-focus'>
                {children}
            </div>
            <p>{children.props.description}</p>
            <button onClick={onClickHodler}>{!isFull ?  "Ajouter au deck" : "deck is full"}</button>
        </div>
    </div>
  )
}

export default CardsOnFocus