import React from 'react'
import ImageCarousel from '../ImageCarousel'
import BelowCarousel from '../BelowCarousel'
import Services from '../Services'
import Bannar from '../Bannar'
import Navbutton from '../Navbutton'

const Home = () => {
  return (
    <>
        <Bannar/>
        <Navbutton/>
        <BelowCarousel/>
        <ImageCarousel/>
        <Services/>
    </>
  )
}

export default Home