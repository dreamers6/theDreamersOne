import React from 'react'
import logo from "../../images/imgs-ayoub/logo.png"
import "./register.css"
export default function Register() {
  return (
    <div className='container register-section'>
        <div className='row justify-content-center'>
            <div className='col-xl-5 col-md-6 col-lg-6'>
                 <div className='register-form'>
                    <img src={logo} alt="logo" className='mb-4' />
                    <form>
                        <input type="text" className='form-control mb-4' placeholder='Name' />
                        <input type="email" className='form-control mb-4' placeholder='Email' />
                        <input type="text" className='form-control mb-4' placeholder='Username' />
                        <input type="password" className='form-control mb-4' placeholder='Password' />
                        <button type="button" className='btn register-btn w-100 mb-3'>Register Now</button>
                        <p className='mb-3'>Already have an account ?</p>
                        <button type="button" className='btn btn-secondary w-100'>Login</button>
                    </form>
                 </div>                
            </div>
        </div>
    </div>
  )
}
