import React from 'react'
import './Footbar.css'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'

const Footbar = () => {
  return (
    <div className='footbar'>
        <ul className='footbar-links'>
            <li className='footbar-li'>Home</li>
            <li className='footbar-li'>About</li>
            <li className='footbar-li'>Services</li>
            <li className='footbar-li'>Blogs</li>
            <li className='footbar-li'>Contacts</li>
        </ul>
        <ul className='footbar-social'>
            <li className='footbar-icons'><FaFacebook size={18}/></li>
            <li className='footbar-icons'><FaTwitter size={18}/></li>
            <li className='footbar-icons'><FaInstagram size={18}/></li>
            <li className='footbar-copyright'><FaRegCopyright className='mt-1.5 mr-1.5' size={12}/><p>2022 BijayNeupane</p></li>
        </ul>
    </div>
  )
}

export default Footbar