import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Card  from './pages/Card/Card'
import Home  from './pages/Home/Home'
import Generate from './pages/Generate/Generate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Clients from './pages/Clients/Clients'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'

const App = () => {
  return (
    <>
      
      <Router>
     <div>
    <Navbar/>
    </div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/generate" element={<Generate/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<AboutUs/>} />

 
      </Routes>
  <Footer/>
    </Router>
    </>
  )
}

export default App