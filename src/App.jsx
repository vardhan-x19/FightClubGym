import React from 'react'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Trainers from './components/Trainers'
import Facilities from './components/Facilities'
import Manifesto from './components/Manifesto'

const App = () => {
  return (
    <>
      <LandingPage bgImage="/miketyson.jpeg" />
      <Home />
      <About bgImage="/fightChat.png" />
      <Manifesto />
      <Trainers />
      <Facilities />
    </>
  )
}

export default App