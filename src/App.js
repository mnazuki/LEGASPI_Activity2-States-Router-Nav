import Counter from './components/Counter.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';
import {NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className = "App">
      <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}to="/home">Activity 2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/home">Home</Nav.Link>
            <Nav.Link as={Link}to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link}to="/about">About</Nav.Link>
            <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
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
