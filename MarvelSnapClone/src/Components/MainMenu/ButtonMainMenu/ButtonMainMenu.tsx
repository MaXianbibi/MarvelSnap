import React from 'react'
import './ButtonMainMenu.css'
import { Link } from 'react-router-dom'


interface ButtonProps {
  name: string
  link: string
  func: () => void | null
}


function ButtonMainMenu({ name, link, func }: ButtonProps) {
  return (
    <Link to={link} onClick={() => {if (func)func()}}>
      <div className='button-container'>
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default ButtonMainMenu