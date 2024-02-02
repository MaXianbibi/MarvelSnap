import React from 'react'
import './ButtonMainMenu.css'
import { Link } from 'react-router-dom'


interface ButtonProps {
  name: string
  link: string
}


function ButtonMainMenu({ name, link }: ButtonProps) {
  return (
    <Link to={link}>
      <div className='button-container'>
        <p>{name}</p>


      </div>
    </Link>
  )
}

export default ButtonMainMenu