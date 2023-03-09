import React from 'react'
import "./ContactUs.css"
import { Twitter } from 'react-feather'
import { Linkedin } from 'react-feather'
import { Instagram } from 'react-feather'
import { Link } from 'react-router-dom'
import Main from '../../Reusable-Component/Main '
import { Home } from 'react-feather'


import styled from 'styled-components';

export default function ContactUs() {
  const Title = styled.h4`
  @media (max-width: 992px) {
    width: 376px;
  }
`;

  return (
    <div>
      {/* Start of the Main section */}
        <Main title={["Contact Us","contact us"]} router={'/'} icon={Home}/>
        
          {/* End of the Main Section */}

          {/* Start of the Second Section */}
          
          <div className='second-section'>
        
             
          
          <div className="container container-md custom-container d-flex  justify-content-evenly contact-form contactUs">
  <div className="row section-row mx-auto">
    <div className="col-lg-5 col-md-6 column6 col-sm-12 form-col">
      <form>
        <div className="row">
          <div class="col-md-6 column6 mb-3">
            <input type="text" className="form-control" id="input1" placeholder="Enter Input 1" style={{ minHeight: '55px'}}/>
          </div>
          <div className="col-md-6 column6 mb-3">
            <input type="text" className="form-control" id="input2" placeholder="Enter Input 2"style={{ minHeight: '55px'}}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 column6 mb-3">
               <input type="text" className="form-control ml-2" id="input3" placeholder="Enter Input 3"style={{ minHeight: '55px'}}/>
          </div>
          <div className="col-md-6 column6 mb-3">
           <select className="form-select select " style={{ minHeight: '55px'}} aria-label="Default select example">
                <option defaultValue>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
           </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <textarea className="form-control" id="textarea" rows="10" placeholder="Enter Textarea"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <button className="btn w-100" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-lg-5 col-md-6 column6 col-sm-12 float-right image-side" >
                <div className='img-overlay'></div>
                         <div className='infos' >
                             <Title className='img-heading' >Contact Us For Any Informations</Title> 
                               <h6 className='location-heading'>Location</h6>
                               <p className='location'>Moulay Rachid, Group 5 </p>
                               <h6 className='contact-heading'>Email & Phone</h6>
                               <Link to="" className='contact-infos email' style={{color:'white'}}>info@yourdomain.com</Link>
                               <p className='contact-infos phone'>(+68) 120034509</p>
                               <h6 className='our-socials'>Follow Us</h6>
                               <ul className='socials-icons'>
                               <li><Link to=''><Twitter style={{color: '565ACF', height: "15px"}} /></Link></li>
                               <li><Link to=''><Linkedin style={{color: '565ACF', height: "15px"}} /></Link></li>
                               <li><Link to=''><Instagram style={{color: '565ACF', height: "15px"}} /></Link> </li>
                               </ul>
                         </div>
                         
                   </div>
    
  </div>
</div>

                 

                       







        {/*End of the Second section  */}
      </div>

    </div>
  )
}