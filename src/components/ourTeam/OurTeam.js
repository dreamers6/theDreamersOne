import "./OurTeam.css" ;
import React, { useEffect } from 'react' ;
import { useState } from 'react' ;
import data from "./OurTeam.json" ;
import Card from "./card/Card.js" ;
import Main from '../../Reusable-Component/Main ';
import { Home } from 'react-feather';



function OurTeam() {

    const [ ourTeam , setOurTeam ] = useState([]) ;

    useEffect( () => {
        setOurTeam(data) ;
    }, [])

    return (
        <div className='ourTeam-area'>
        <div className='ourTeam-area-top'>
            <Main title={["Our Team","Our Team"]} router={'/'} icon={Home}/>
        </div>
        <div class="container ourTeam">
            <div class="row">
                { ourTeam.map( item => {
                    return (
                        <Card id = { item.id } imgPerson = { item.imgPerson } name = { item.name } specialist = { item.specialist } twitter = { item.twitter } linkeden = { item.linkenden } instagram = { item.instagram } />
                    )
                } ) }
            </div>
            <img className="img image01" src=".../../images-ourTeam/image01.png" alt="image01" />
            <img className="img image02" src=".../../images-ourTeam/image02.png" alt="image02" />
            <img className="img image03" src=".../../images-ourTeam/image03.png" alt="image03" />
            <img className="img image04" src=".../../images-ourTeam/image04.png" alt="image04" />
        </div>
    </div>


    )
}

export default OurTeam ;