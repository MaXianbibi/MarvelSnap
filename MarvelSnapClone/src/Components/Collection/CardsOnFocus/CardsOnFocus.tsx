import React from 'react'
import './CardsOnFocus.css'


function CardsOnFocus({children, description}) {
    function onClickHodler() {
    }

  return (
    <div className='cards-on-focus-container'>
        <div className='cards-on-focus-child-container'>
            {children}
            <p>{description}</p>
            <button onClick={onClickHodler}>Ajouter au deck</button>
        </div>
    </div>
  )
}

export default CardsOnFocus