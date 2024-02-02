import React from 'react'
import './ButtonHeader.css'
import { Link } from 'react-router-dom'


interface ButtonHeaderProps {
    name: string
    link: string
}


function ButtonHeader({ name, link }: ButtonHeaderProps) {
    return (
        <Link to={link} className='button-header-container'>
            <div >
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default ButtonHeader