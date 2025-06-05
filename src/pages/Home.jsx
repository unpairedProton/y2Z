import React from 'react'
import DestinationList from '../components/DestinationList'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='min-w-screen min-h-screen w-full h-full flex  ' >
      <section className='w-[65%] h-full flex flex-col'>
        <Navbar></Navbar>
        <DestinationList></DestinationList>
      </section>
      <section className='w-[35%] h-full ' >
        <Map></Map>
      </section>
    </div>
  )
}

export default Home