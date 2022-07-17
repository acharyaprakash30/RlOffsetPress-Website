import React from 'react'
import ImageCarousel from '../ImageCarousel'
import BelowCarousel from '../BelowCarousel'
import Services from '../Services'
import Bannar from '../Bannar'

const Home = () => {
  return (
    <div>
        <Bannar/>
        <BelowCarousel/>
        <ImageCarousel/>
        <Services/>
    </div>
  )
}

export default Home