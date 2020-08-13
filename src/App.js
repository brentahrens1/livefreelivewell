import React from 'react';
import './sass/_base.scss';

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
