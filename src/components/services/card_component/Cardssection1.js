import React from 'react'
import { Link } from 'react-router-dom'

import './card.css'

export default function Cards(props) {
  return (
    <div className='col-lg-4 col-md-6 mb-3 coloms'>
      <div className='card-content'>
        <div className='icon-box'>
          <span className='icon'>
            <svg enableBackground={props.enableBackground} style={{ height: '85',width: '85' }} viewBox="0 0 512 512" xmlns='http://www.w3.org/2000/svg' >
              <path d={props.path1} fill={props.file1}></path>
              <path d={props.path2}></path>
              <path d={props.path3}></path>
            </svg>
          </span>
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
