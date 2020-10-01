import React from 'react';

import Navbar from './components/Navbar'
import Search from './components/Search'
import Giphys from './components/Giphys'

import GiphyState from './context/Giphy/GiphyState'

import './App.css';

const App = () => {

  return (
    <GiphyState>
      <div className="App">
        <Navbar/>
        <Search/>
        <Giphys/>
      </div>
    </GiphyState>
  );
}

export default App;
