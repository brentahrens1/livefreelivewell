import React from 'react';
import './sass/_base.scss';

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
