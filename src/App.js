import React from 'react'
import { Navbar, Home, About, Services, Footer } from './components/export.js';
import { Routes, Route } from 'react-router-dom';
import './style/style.css'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
