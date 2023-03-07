import React from 'react'
import { useState,useEffect } from 'react'
import getservicedata from '../data/api'
import Cards from '../card_component/Cards'
import './services_sections.css'

export default function Section1() {
    const [data,setdata]=useState([])

    useEffect(() => {
      const fetchData = () => {
        const response = getservicedata();
        setdata(response);
      };
      fetchData();
    }, []);

    
  return (
    <div className='services-area-cards'>
        <div className='container'>
            <div className='row'>
                {data.map(item => {
                return(
                    <Cards title={item.title} key={item.id} icon={item.img} description={item.desc}/>
                )
                })}
            </div>
        </div>
    </div>
  )
}
