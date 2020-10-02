import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import Giphy from './components/Giphy'

import GiphyState from './context/Giphy/GiphyState'

import './App.css';

const App = () => {

  return (
    <GiphyState>
      <Router>
        <div className="App">
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/giphy/:id' component={Giphy}/>
            </Switch>
          </div>
        </div>
      </Router>
    </GiphyState>
  );
}

export default App;
