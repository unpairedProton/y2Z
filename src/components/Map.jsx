import React from 'react'
import googleMap from '../assets/images/google_map.png'


const Map = () => {
  return (
    <div className=' h-screen fixed right-0 w-[50%]' >
      <img  className='w-full h-full object-cover object-center' src={googleMap} alt="" />
    </div>
  )
}

export default Map