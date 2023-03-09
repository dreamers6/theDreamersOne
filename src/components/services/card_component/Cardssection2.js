import React from 'react'

export default function Cardssection2(props) {
  return (
    
      <div className='col-xl-3 col-sm-6 pt-3'>
        <div className='services-section2-content'>
          <h2 className='counter'>{props.number}</h2>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    
  )
}
