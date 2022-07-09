import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'> 
        <div className='services-first'>
            <p className='services-box'><svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 px-5 icon-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg> <p className='services-box-text'>COPYING SERVICES</p></p>
            <p className='services-box'><svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 px-5 icon-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg> <p className='services-box-text'>DESIGN SERVICES</p></p>
            <p className='services-box'><svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 px-5 icon-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg> <p className='services-box-text'>DIGITAL SCANNING</p></p>
            <p className='services-box'><svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 px-5 icon-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg> <p className='services-box-text'>PRINTING SERVICES</p></p>
        </div>
        <div className='services-second'>
            <h3 className='services-h3'>Provide Quality</h3><br></br>
            <h1 className='services-h1'>COPY SERVICES</h1><br></br>
            <p className='services-p'>Photocopying is widely used in the business, education, and government sectors. 
                While there have been predictions that photocopiers
                will eventually become obsolete as information workers increase their use.</p><br></br><br></br>
            <button className='services-btn'>MORE INFO</button>
        </div>
    </div>
  )
}

export default Services