import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Giphy from './components/Giphy'
import Alert from './components/Alert'

import GiphyState from './context/Giphy/GiphyState'
import AlertState from './context/Alert/AlertState'

import './App.css';

const App = () => {

  return (
    <GiphyState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar/>
            <div className='container'>
              <Alert/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/giphy/:id' component={Giphy}/>
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GiphyState>
  );
}

export default App;
