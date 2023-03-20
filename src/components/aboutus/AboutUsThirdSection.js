import React, { useEffect, useState } from 'react'
import ourTeamData from '../ourTeam/OurTeam.json'
import { get_data } from '../services/data/api'
import Card from '../ourTeam/card/Card'
export default function AboutUsThirdSection () {
    const [ourTeam , setOurTeam] = useState([])

    useEffect(()=>{
      const fetchData = () =>{
         const repsonse = get_data(ourTeamData)
         setOurTeam(repsonse)
      };
      fetchData()
    })
    
  return (
    <div class="container ourTeam about-us-section mt-5">
            <div class="row">
                    <div className='heading-side'>
                        <h6>Our Doctors</h6>
                        <h2 className='title'>Meet The Best Doctors</h2>
                    </div>
   {ourTeam.slice(0,3).map(item => {                   
         return (
        <Card id = { item.id } imgPerson = { item.imgPerson } name = { item.name } specialist = { item.specialist } twitter = { item.twitter } linkeden = { item.linkenden } instagram = { item.instagram } />
    )})}
    </div>
    </div>
  )
}
