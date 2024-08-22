import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Workwith from './components/Workwith'
import Discount from './components/Discount'
import WhyExist from './components/WhyExist'
import PopularCourse from './components/PopularCourse'
import SkillShoot from './components/SkillShoot'
import Promote from './components/Promote'
import Subscribe from './components/Subscribe'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-pops'>
      <Navbar/>
      <Banner/>
      <Workwith/>
      <Discount/>
      <WhyExist/>
      <PopularCourse/>
      <SkillShoot/>
      <Promote/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
