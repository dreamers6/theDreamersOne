import React from 'react'
import "./ContactUs.css"
import { Home } from 'react-feather'
import { Twitter } from 'react-feather'
import { Linkedin } from 'react-feather'
import { Instagram } from 'react-feather'
import { Link } from 'react-router-dom'
import circleImage from './imgs/circle-dots.png'
import plusImage from './imgs/plus-blue.png'
import phone from './imgs/phone.png'
import mail from './imgs/mail.png'
import map from './imgs/map.png'
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

      <div className="main-banner">

        <img className='circle-image' src={circleImage} alt="circle-image" />
        <img className='plus-image' src={plusImage} alt="" />
        <div className="container router">
          <h1 className='main-heading'>Contact Us</h1>
          <ul className="router-list">
            <li><Link to='/' className='home'><Home />   Home </Link></li>
            <li>/</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      {/* End of the Main Section */}

      {/* Start of the Second Section */}

      <div className='second-section'>



        <div className="container custom-container  contact-form">
          <div className="row section-row">
            <div className="col-lg-6  form-col mb-5">
              <form>
                <div className="row">
                  <div class="col-md-6 mb-3">
                    <input type="text" className="form-control" id="input1" placeholder="Enter Input 1" style={{ minHeight: '55px' }} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" id="input2" placeholder="Enter Input 2" style={{ minHeight: '55px' }} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control ml-2" id="input3" placeholder="Enter Input 3" style={{ minHeight: '55px' }} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <select className="form-select select " style={{ minHeight: '55px' }} aria-label="Default select example">
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
            <div className="col-lg-6  image-side" >
              <div className='img-overlay'></div>
              <div className='infos' >
                <Title className='img-heading' >Contact Us For Any Informations</Title>
                <h6 className='location-heading'>Location</h6>
                <p className='location'>Moulay Rachid, Group 5 </p>
                <h6 className='contact-heading'>Email & Phone</h6>
                <Link to="" className='contact-infos email' style={{ color: 'white' }}>info@yourdomain.com</Link>
                <p className='contact-infos phone'>(+68) 120034509</p>
                <h6 className='our-socials'>Follow Us</h6>
                <ul className='socials-icons'>
                  <li><Link to=''><Twitter style={{ color: '565ACF', height: "15px" }} /></Link></li>
                  <li><Link to=''><Linkedin style={{ color: '565ACF', height: "15px" }} /></Link></li>
                  <li><Link to=''><Instagram style={{ color: '565ACF', height: "15px" }} /></Link> </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
        {/* Start of the sub section */}


        <div className=' container sub-section'>
          <div className='cards'>
            <div className="row mx-auto">

              <div className="card-tt col-lg-4 col-md-6 col-sm-12">
                <div className='card1'>
                  <div className="card">
                    <div className="card-body">
                      <div className='card-icon' id='phone'><div class='image'><img src={phone} alt="" /></div></div>
                      <h5 className="card-title">Contact Number</h5>
                      <p className="card-text phone-text">+001 123 456 790
                        +002 3424 44 00
                      </p>

                    </div>
                  </div>
                </div>
              </div>

              <div className="card-tt col-lg-4 col-md-6 col-sm-12"><div className='card2'>
                <div className="card">
                  <div className="card-body">
                    <div className='card-icon' id='mail'><img src={mail} alt="" /></div>
                    <h5 className="card-title">Email Address</h5>
                    <p className="card-text mail-text">info@yourdomain.com
                      example@support.com
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className="card-tt col-lg-4 col-md-6 col-sm-12"><div className='card3'>
                <div className="card">
                  <div className="card-body">
                    <div className='card-icon' id='map'><img src={map} /> </div>
                    <h5 className="card-title">Location</h5>
                    <p className="card-text map-text">2005 Stokes Isle Apt. 896,
                      Venaville 10010, USA</p>
                  </div>
                </div>
              </div>
              </div>
            </div>


          </div>
        </div>








        {/*End of the Second section  */}
      </div>

    </div>
  )
}
