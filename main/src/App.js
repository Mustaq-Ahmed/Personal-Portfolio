import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import ContactMe from './components/ContactMe/ContactMe';
import './App.css';

function App() {

  return (
    <>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <AboutMe />
      </section>
      <section id='resume'>
        <Resume />
      </section>
      <section id='contact'>
        <ContactMe />
      </section>
    </>
  );
}

export default App;
