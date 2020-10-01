import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import './App.css';

const App = () => {

  const [gif, setGif] = useState(null)

  useEffect(() => {
    setGif('test')
  }, [])

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
