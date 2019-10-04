import React from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import './App.css';
import './index.css'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1>MAIN CONTENT</h1>
      <Footer/>
    </div>
  );
}

export default App;
