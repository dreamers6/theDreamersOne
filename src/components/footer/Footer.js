import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-area bg-light'>
        <div className='footer-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 mb-5'>
                        <div className='first-col'>
                            <div className='footer-logo'>
                                <Link to='/'>
                                    <img src='images/logo.png' alt='logo'/>
                                </Link>
                            </div>
                            <div className='footer-contact mt-2'>
                                <p className='mt-4'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                                <div className='contact-box d-flex justify-content-start align-items-center'>
                                    <div className='contact-icon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='contact-number ms-2'>
                                        <p>Contact us</p>
                                        <h4 className='mt-2'>+212012345678</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-5'>
                        <div className='second-col'>
                            <h3 className='col-title'>Quick Links</h3>
                            <ul className='ps-0'>
                                <li className='nav-item py-2'>
                                    <Link to='/'>About Us</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Services</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Blogs</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Faqs</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-5'>
                        <div className='third-col'>
                            <h3 className='col-title'>Our Service</h3>
                            <ul className='ps-0'>
                                <li className='nav-item py-2'>
                                    <Link to='/'>About Us</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Services</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Blogs</Link>
                                </li>

                                <li className='nav-item py-2'>
                                    <Link to='/'>Faqs</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className='fourth-colon'>
                            <h3 className='footer-tittle col-title'>Subscribe</h3>
                            <form className='mb-4'>
                                <div className='msg-ajax'></div>
                                <div className='inputs'>
                                    <input type='email' placeholder='Email Address' name='subscribe'  />
                                </div>
                                <button className='btn subscribe'>Subscribe new</button>
                            </form >
                            <div className='footer-social-link'>
                                <ul className='ps-0'>
                                    <li>
                                        <a target="_blank" href="#"><img src='images/social-media-icon/facebook.png'/></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="#"><img src='images/social-media-icon/instagram.png'/></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="#"><img src='images/social-media-icon/linkedin.png'/></a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="#"><img src='images/social-media-icon/twitter.png'/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='container'>
                <div className='line'></div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10'>
                        <p className='crator text-center mb-0'>Copyright © 2023 Design & Developed by <a href='#'>the dreamres</a></p>
                    </div>
                </div>
            </div>
        </div>

        <img className='footer-animation d-none d-md-block'  id='pic1' src='images/circle-dots.png' alt='cyrcle'></img>
        <img className='footer-animation d-none d-md-block ' id='pic2' src='images/wave-blue (1).png' alt='wave'></img>
        <img className='footer-animation d-none d-md-block'  id='pic4' src='images/wave-blue (1).png' alt='wave'></img>
        <img className='footer-animation d-none d-md-block'  id='pic3' src='images/plus-blue.png' alt='plus'></img>
    </div>
  )

}
