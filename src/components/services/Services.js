import React from 'react'
import Main from '../../Reusable-Component/Main '
import { Home } from 'react-feather'
import Section1 from './services_sections/Section1'


export default function Services() {



  return (
    <div className='services-area'>
      <div className='services-area-top'>
        <Main title={["Services","services"]} router={'/'} icon={Home}/>
      </div>
        <Section1 />
    </div>
  )
}
