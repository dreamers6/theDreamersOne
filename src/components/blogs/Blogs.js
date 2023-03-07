import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { Calendar } from 'react-feather'
import "./Blogs.css"
import { ChevronRight } from 'react-feather'
export default function Blogs() {
  
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/cards")
        .then( res => setCardData(res.data))
        .catch( error => console.log(error) )
    }, [])
        
    const cardMap = cardData.map( card => {
      return (
       
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="card" key={card.id}>
            <img src={card.image} class="card-img-top" alt={card.id} />          
            <div className="card-body">
              <ul >
                <li className='author'><Link><img src={card.smallImage} className="sm-img" alt="wow" /></Link> {card.author}</li>
                <li className='date'><Calendar style={{fontSize: "10px"}} /> {card.date}</li>
              </ul>
              <p className="card-text">{card.author}</p>
              <h4 className="card-title">{card.title}</h4>
              <Link href="#" className="btn">Read More  <ChevronRight className='btn-icon' /></Link>
            </div>
          </div>
        </div>
        
      )
    })

    return (
       // Start of the second Section 
    <div className='container  '>
        <div className='row mx-auto'>
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
  )
}
