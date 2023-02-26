
import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Title from './component/Title'

export default function App() {

  const[text,setText]=useState(true)

  const change=()=>{
    setText(!text)
  }
  
  return (
    <div className="app">
     {text ? <Home/> : <About/>} 
    <button className='btn' onClick={change}>Clik</button>
    </div>
  );
}