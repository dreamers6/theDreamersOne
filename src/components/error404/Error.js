import React from 'react'
import { Link } from 'react-router-dom'
import error404 from "../../images/error.gif"
import "./error.css"
export default function Error() {
  return (
    <div className='container' >
           <div className='error-section text-center'>
              <h2 className='main-title'>
                4 
                <span><img src={error404} alt="error" /></span>
                4
              </h2>
              <h3 className='sub-title'>The Page you were looking for,
               couldn't be found.
               </h3>
              <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          
           <div className='fix'>
                <button type="button" className='btn fix-btn'>Back</button>
                <Link to="/"><button type="button" className='btn fix-btn'>Back To home</button></Link> 
           </div> 
           </div>
    </div>
  )
}
