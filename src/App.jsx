import React from 'react'
import './App.css'
import Hero from './Components/Hero'
import Trending from './Components/Trending'
import Navbar from './Components/Navbar'
import Herooo from './Components/Herooo'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Herooo/>
      <div className='bg'>
      <Hero/>
      <Trending/>
      </div>
      <Footer/>
    </>
  )
}

export default App
