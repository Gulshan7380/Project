import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Features from './components/pages/Keyfeatures';
import Pricing from './components/pages/Pricing';
import Testimonials from './components/pages/Testimonials';
import Demo from './components/pages/Demo';
import Navbar from './components/Navbar/Navbar';
import './app.css';


const App = () => {
  return (
    <div className='container'>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/features' element={<Features/>}></Route>
            <Route path='/pricing' element={<Pricing/>}></Route>
            <Route path='/testimonials' element={<Testimonials/>}></Route>
            <Route path='/demo' element={<Demo/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App;