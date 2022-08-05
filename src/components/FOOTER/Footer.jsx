import React from 'react'
import './footer.css'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Telegram from '../assets/Telegram.svg'
import YouTube from '../assets/YouTube.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Подпишитесь на нас!</h2>
      <img src={Instagram} alt='instagram'/>
      <img src={Facebook} alt='facebook'/>
      <img src={Telegram} alt='telegram'/>
      <img src={YouTube} alt='YouTube'/>
    </div>
  )
}

export default Footer