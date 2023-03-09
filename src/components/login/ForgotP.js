import React from 'react'
import "./forgotP.css"
import logo from "../../images/imgs-ayoub/logo.png"
export default function ForgotP() {
  return (
    <div className='container login-section mb-5'>
            <div className='row booking justify-content-center '>
                 <div className='col-xl-5 col-lg-6 col-md-6'>
                    <div className='forgotP-form'>
                        <img src={logo} alt="logo" className='logo text-center mb-4' />
                        <form>
                          
                           <input type="password" className="form-control input-1 mb-4" style={{ minHeight: '55px'}} id="Input1" placeholder="Password" />
                           <input type="password" className="form-control input-2 mb-4" style={{ minHeight: '55px'}} id="Input2" placeholder="New password" />
                           <button type="button" className='btn submit-btn text-center mx-auto mb-4 w-100'>Submit</button>
                           <p className='mb-3'>Already have an account ?</p>
                           <button type="button" className='btn btn-secondary mb-3 w-100'>Login</button>
                        </form>
                    </div>
                 </div>
            </div>
        </div>
  )
}
