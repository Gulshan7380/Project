import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './app.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
       
    </BrowserRouter>
  );
};

export default App;