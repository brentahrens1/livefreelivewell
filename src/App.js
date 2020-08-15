import React from 'react';
import './sass/_base.scss';

import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route to="/home" exact component={Home} />
        <Route to="/about" exact component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
