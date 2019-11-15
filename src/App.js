import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header'
import './App.css';
import './index.css'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <h1>MAIN CONTENT</h1>
      <Footer/>
    </div>
  );
}

export default App;
