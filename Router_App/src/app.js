import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';


const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>

  );
}

export default App;