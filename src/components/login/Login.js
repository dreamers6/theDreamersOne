import React from 'react'
import { Home } from 'react-feather'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/imgs-ayoub/logo.png";
// import Main from "../../Reusable-Component/Main"
import "./login.css"
export default function Login() {
  return (
    <div>
        {/* Main Banner */}
         {/* <Main title={["Booking" , "Booking"]} router={"/"} icon={Home} /> */}
        {/* End of Main Banner*/}
        <div className='container login-section mb-5'>
            <div className='row booking justify-content-center '>
                 <div className='col-xl-5 col-lg-6 col-md-6'>
                    <div className='login-form'>
                        <img src={logo} alt="logo" className='logo text-center mb-4' />
                        <form>
                          
                           <input type="text" className="form-control input-1 mb-4" id="Input1" placeholder="Username" />
                           <input type="password" className="form-control input-2 mb-4" id="Input2" placeholder="Password" />
                           <button type="button" className='btn login-btn text-center mx-auto mb-4 w-100'>Login</button>
                           <Link to="" className='forgot-pass'>Forgot Password</Link>
                           <p className='para mb-3'>Don't have any account ?</p>
                           <button type="button" className='btn btn-secondary mb-3 w-100'>Register</button>
                        </form>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
