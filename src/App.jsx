import React from 'react';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Trainers from './components/Trainers';
import Facilities from './components/Facilities';

const App = () => {
  return (
    <>
      <div id="landing">
        <LandingPage bgImage="/miketyson.jpeg" />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="trainers">
        <Trainers />
      </div>
      <div id="facilities">
        <Facilities />
      </div>
    </>
  );
};

export default App;
