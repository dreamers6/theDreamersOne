import React from 'react'
import { Home } from 'react-feather'
import "./booking.css"
// import Main from "../../Reusable-Component/Main"
export default function Booking() {
  return (
    <div>
        {/* Main Banner */}
         {/* <Main title={["Booking" , "Booking"]} router={"/"} icon={Home} /> */}
        {/* End of Main Banner*/}
        <div className='container booking-section'>
            <div className='row justify-content-center booking'>
                 <div className='col-xl-5 col-lg-6 col-md-6'>
                    <div className='appointment-form'>
                        <h3 className='booking-title text-center'>Book Appointment</h3>
                        <form>
                           <select class="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
                              <option selected>Select Department</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                           <select class="form-select form-select-lg mb-4" aria-label=".form-select-lg example">
                              <option selected>Select Doctor</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                           <input type="text" class="form-control input-1 mb-4" id="Input1" placeholder="Your Name" />
                           <input type="text" class="form-control input-2 mb-4" id="Input2" placeholder="Phone Number" />
                           <input type="date" class="form-control input-3 mb-4" id="Input3" placeholder="mm/dd/yyyy" />
                           <button type="submit" className='btn btn-secondary mb-3'>Apply Now</button>
                        </form>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}
