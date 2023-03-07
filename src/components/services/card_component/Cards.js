import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

export default function Cards(props) {
  return (
    <div className='col-lg-4 col-md-6 mb-3 coloms'>
        <div className='card-content'>
            <div className='icon-box'>
                <span className='icon'>{props.icon}</span>
            </div>
            <div className='description'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link to={'#'} className='btn card-btn'>View More</Link>
            </div>
        </div>
    </div>
  )
}
