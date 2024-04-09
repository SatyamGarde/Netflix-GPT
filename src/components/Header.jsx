import React from 'react'
import { LOGO_URL } from '../Utils/Constants'
const Header = () => {
  return (
    <div>
      <img className='absolute z-20 w-44 px-8 py-2 bg-gradient-to-b from-black' src={LOGO_URL} alt='Logo'></img>
    </div>
  )
}

export default Header