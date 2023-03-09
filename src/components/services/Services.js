import React from 'react'
import { useState, useEffect } from 'react'
import {get_section2_data} from './data/api'
import Cards from './card_component/Cardssection1'
import './services_sections.css'
import Main from '../../Reusable-Component/Main '
import { Home } from 'react-feather'
import Cardssection2 from './card_component/Cardssection2'


export default function Section1() {

  const [data2,setdata2]=useState([])

  useEffect(() => {
    const fetchData = () => {
      const response2= get_section2_data();
      setdata2(response2);
    };
    fetchData();
  }, []);


  return (
    <div className='services-area'>
      <div className='services-area-top'>
        <Main title={["Services","services"]} router={'/'} icon={Home}/>
      </div>

      <div className='services-area-cards'>
      <div className='services-section1 pb-5'>
        <div className='container'>
          <div className='row'>
            <Cards />
          </div>

        </div>
      </div>
      <div className='services-section2 pb-5'>
            <div className='container'>
            <div className='row'>
              {data2.map(item=>{
                return (
                  <Cardssection2 number={item.number} title={item.title} text={item.text} second={item.second} key={item.id}/>
                )
              })}              
            </div>
            </div>
      </div>
    </div>
    </div>
  )
}
