import React from 'react'

import fondoHome from '../../assets/img/fondo-home.png'
import Header from '../layouts/Header'
import HomeMain from '../home/HomeMain'
import Footer from '../layouts/footer/Footer'

 const Home =   () => {
  return (
  <div style={{backgroundImage:`url(${fondoHome})`, backgroundSize:'cover', width:'100vw', height:'100vh'}}>
    <HomeMain/>
  </div>
  )
}

export default Home
