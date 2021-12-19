import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';



function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
