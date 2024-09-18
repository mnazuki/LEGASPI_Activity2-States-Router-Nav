import Counter from './components/Counter.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import {NavLink} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className = "App">
      <Router>
        <div>
          <nav>        
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink></li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav> 
        </div>
        
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}


export default App;
