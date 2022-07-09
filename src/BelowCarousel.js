import React from 'react'
import './BelowCarousel.css'

const BelowCarousel = () => {
  return (
    <div className='bc'>
        <div className='bc-first'>
            <h3 className='bc-h3'>Welcome to our</h3><br></br>
            <h1 className='bc-h1'>FULL-SERVICE COPY AND PRINTING CENTER</h1><br></br>
            <p className='bc-p'>CopyPress has provided quality printing services to the NYC area and beyond since 1896! 
                We specialize in commercial offset printing and digital printing services to cover all 
                your needs. From brochures to banners, we are your one-stop print shop</p><br></br><br></br>
                <button className='bc-btn'>Discover More</button>
        </div>
        <div className='bc-midgap'></div>
        <div className='bc-second'>
            <img className='bc-img' src='https://refinepackaging.com/wp-content/uploads/2020/10/what-is-offset-printing.jpeg' alt=''/>
        </div>
    </div>
  )
}

export default BelowCarousel