import React from 'react'
import { useState, useEffect } from 'react'
import {getservicedata,get_section2_data} from '../data/api'
import Cards from '../card_component/Cardssection1'
import './services_sections.css'
import Cardssection2 from '../card_component/Cardssection2'


export default function Section1() {
  const [data, setdata] = useState([])
  const [data2,setdata2]=useState([])

  useEffect(() => {
    const fetchData = () => {
      const response = getservicedata();
      const response2= get_section2_data();
      setdata(response);
      setdata2(response2);
    };
    fetchData();
  }, []);


  return (
    <div className='services-area-cards'>
      <div className='services-section1 pb-5'>
        <div className='container'>
          <div className='row'>
            {data.map(item => {
              return (
                <Cards title={item.title} key={item.id} icon={item.img} description={item.desc} enableBackground={item.enableBackground} path1={item.path1} file1={item.file1} path2={item.path2} path3={item.path3} />
              )
            })}
          </div>

        </div>
      </div>
      <div className='services-section2 pb-5'>
            <div className='container'>
            <div className='row'>
              {data2.map(item=>{
                return (
                  <Cardssection2 number={item.number} title={item.title} text={item.text} key={item.id}/>
                )
              })}              
            </div>
            </div>
      </div>
    </div>
  )
}
