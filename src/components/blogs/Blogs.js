import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { Calendar, Home } from 'react-feather'
import "./Blogs.css"
import { ChevronRight } from 'react-feather'
import Main from '../../Reusable-Component/Main '
// import Footer from '../footer/Footer'
import data from "./Anass.json" ;
export default function Blogs() {
  
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        // axios.get("./Anass.json")
        // .then( res => console.log(res) )
        // .then( res => setCardData(res.data))
        // .catch( error => console.log(error) )
        setCardData(data)
    }, [])

    console.log(cardData) ;

    const cardMap = cardData.map( card => {
      return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5">
          <div className="card" key={card.id}>
            <img src={card.image} class="card-img-top" alt={card.id} />          
            <div className="card-body">
              <ul >
                <li className='author'><Link><img src={card.smallImage} className="sm-img" alt="wow" /></Link> {card.author}</li>
                <li className='date'><Calendar style={{fontSize: "10px"}} /> {card.date}</li>
              </ul>
              <h4 className="card-title">{card.title}</h4>
              <Link href="#" className="btn btn-sm">Read More  <ChevronRight className='btn-icon ml-2' /></Link>
            </div>
          </div>
        </div>
        
      )
    })

    return (
<div>
      <Main title={["Blog Grid 3" , "Blog Grid 3"]} router={'/'} icon={Home} />
    
        {/* Start of the second Section  */}
    <div className='container cont'>
        <div className='row mx-auto '>
          {cardMap}
        </div>
        <NavLink aria-label="...">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
               <Link className="page-link">Previous</Link>
            </li>
            <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
            <li className="page-item " aria-current="page">
            <Link className="page-link" href="#">2</Link>
            </li>
            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
            <li className="page-item">
            <Link className="page-link" href="#">Next</Link>
            </li>
          </ul>
        </NavLink>
       {/* End of the Second Section */}
    </div> 
</div> 
  )
}
