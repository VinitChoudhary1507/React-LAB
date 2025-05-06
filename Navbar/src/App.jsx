import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import About from './Navbar/About'
import { Home } from './Navbar/Home'
import Pricing from './Navbar/Pricing'

function App() {


  return (
    <>
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/price">prices</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Pricing />} />
    </Routes>
      </Router>      
    </>
  )
}

export default App
