import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services'
import Vendors from './components/vendors'
import Projects from './components/projects'
import Contact from './components/contacts'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/vendors" element={<Vendors/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contacts" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
