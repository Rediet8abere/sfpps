// src/App.js

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './About'
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails';


function App() {
  return (

    <Router>
  <div className="App">

    <Title />

    <Route exact path="/" component={POPOSList}/>
    <Route path="/details/:id" component={POPOSDetails} />
    <Route path="/about" component={About} />
    <Footer />

  </div>
</Router>

  );
}

export default App;
