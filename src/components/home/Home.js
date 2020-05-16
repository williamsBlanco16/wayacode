import React from 'react'

import Header from '../layouts/header/Header'
import HomeMain from '../home/HomeMain'
import Footer from '../layouts/footer/Footer'
import ParticlesCustom from '../layouts/ParticlesCustom'
import Fondo from '../layouts/Fondo'

 const Home = () => {
  
   return (
    <Fondo target='home'>
      <Header/>
      <ParticlesCustom/>
      <HomeMain/>
      <Footer/>
    </Fondo>
  )
}

export default Home;
