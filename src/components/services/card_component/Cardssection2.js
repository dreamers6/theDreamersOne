import React, { useEffect, useState } from 'react'

export default function Cardssection2(props) {

  const [count,setcount]=useState(0)

  useEffect(()=>{
    const interval=setInterval(()=>{
      if(count<props.number){
        setcount(count+1)
      }
    },5);
    return () => clearInterval(interval);
  }, [count, props.number]);



  

  return (
    
      <div className='col-xl-3 col-sm-6 pt-3'>
        <div className='services-section2-content'>
          <h2 className='counter'>{count}</h2>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    
  )
}
