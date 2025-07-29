import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Trainers from './components/Trainers'
import Facilities from './components/Facilities'

const App = () => {
  return (
    <>
      <Home bgImage="/fightclub.jpg" />
      <About bgImage="/fightclub1.jpg" />
      <Trainers />
      <Facilities />
    </>
  )
}

export default App