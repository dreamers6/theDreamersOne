import React, { useEffect, useState } from 'react'
import { get_data } from '../services/data/api'
import section2 from '../services/data/sectio2data.json'
import Cardssection2 from '../services/card_component/Cardssection2'
export default function AboutUsSecondSection() {
    const [data , setData] = useState([])
    useEffect(()=>{
      const fetchData = () =>{
        const response1 = get_data(section2)
        setData(response1)
    };
    fetchData()
     
},[])
   
  return (
    <div className='services-section2 pb-5'>
          <div className='container'>
            <div className='row'>
              {data.map(item => {
                return (
                  <Cardssection2 number={item.number} title={item.title} text={item.text} second={item.second} key={item.id} />
                )
              })}
            </div>
          </div>
        </div>
  )
}
