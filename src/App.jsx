import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'

const App = () => {
  return (
    <div className='px-14'>
      <Navbar/>
      <div className="space-y-8">
        <HeroSection/>
      <ServicesSection/>
      </div>
    </div>
  )
}

export default App