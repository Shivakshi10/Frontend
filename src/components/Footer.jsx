import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <img src='assets/foot1.avif' alt='' className='footimg'></img>
        <div className="footHead">
           <span className='heading'>GET IN TOUCH</span>
        </div>
        <div className="grid">
            <div className="gridItems">
                <span className='gridH'>Socials</span>
                <span className='gridl'>Instagram</span>
                <span className='gridl'>Twitter</span>
                <span className='gridl'>Facebook</span>
                <span className='gridl'>Linkedin</span>
            </div>
            <div className="gridItems">
                <span className='gridH'>Locations</span>
                <span className='gridl'>786 Plane Street, Eastern Cape,</span>
                <span className='gridl'>Engcobo 5054</span>
                
            </div>
            <div className="gridItems">
            <span className='grids'>.</span>
                <span className='gridl'>9436 Feather Street, Santa Fe,</span>
                <span className='gridl'>New Mexico 87501</span>
                
            </div>
            <div className="gridItems">
                <span className='grids'>.</span>
                <span className='gridl'>2179 Clover Avenue, Coquitiam,</span>
                <span className='gridl'>British Columbia V3J 5S9</span>
                
            </div>
            
        </div>
      <div className="footHead">
        <span className='infog'>HELLO@REALLYGREATSITE.COM</span>
      </div>
    </div>
  )
}

export default Footer
