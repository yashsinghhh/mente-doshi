import React from 'react'


import { Footer,Header,Features,Blog,Possibility,WhatGPT} from './containers';
import { Cta,Brand,Navbar} from './components';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';




const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>


    </div>
    
  )
}

export default App