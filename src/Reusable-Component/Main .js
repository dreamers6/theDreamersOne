import React from 'react'
import { Link } from 'react-router-dom'
import cyrcle from './img/circle-dots.png'
import plus from './img/plus-blue.png'
import wave from './img/wave-image.png'


export default function Main (props) {
  return (
    <div className="main-banner">
        
            <img className='circle-image'  src={cyrcle} alt="circle" />
            <img className='plus-image' src={plus} alt="plus" />
            <img className='wave-image' src={wave} alt="wave" />
          <div className="container router">
              <h1 className='main-heading'>{props.title[0]}</h1>
              <ul className="router-list">
                <li><Link to={props.router} className='home'><props.icon />Home</Link></li>
                <li>/</li>
                <li>{props.title[1]}</li>
              </ul>          
          </div>
          </div>
  )
}
