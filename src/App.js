import React from 'react';
import './sass/_base.scss';

import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Coaching from './components/Coaching/Coaching'
import Training from './components/Training/Training'
import KettlebellClub from './components/KettlebellClub/KettlebellClub'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

console.log(process.env.REACT_APP_LIVE_FREE_LIVE_WELL)

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/coaching" exact component={Coaching} />
          <Route path="/training" exact component={Training} />
          <Route path="/kettlebell-club" exact component={KettlebellClub} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
      <div id="footer">
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
