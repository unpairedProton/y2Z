import React from 'react'
import DestinationList from '../components/DestinationList'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import '../styles/List.css' 
const Home = () => {
  return (
    <div className='min-w-screen min-h-screen w-full h-screen flex  relative overflow-x-hidden custom-scrollbar ' >
      <section className='w-[50%] h-full flex flex-col '
      >
        <Navbar></Navbar>
        <DestinationList></DestinationList>
      </section>
      <section className=' w-[50%] flex-1  h-screen relative' >
        <Map></Map>
      </section>
    </div>
  )
}

export default Home