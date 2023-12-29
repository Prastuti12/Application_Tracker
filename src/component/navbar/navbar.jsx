import React from 'react'
import logo from "../../assets/images/eikonsem-logo.png"
function navbar() {
  return (
    <div className='navbar-section bg-dark px-5 py-2'>
        <div className="row">
            <div className="col-md-4">
                <div className="logo"><img src={logo} alt=""  /></div>
            </div>
            <div className="col-md-8"></div>
        </div>
    </div>
  )
}

export default navbar
