import React from 'react'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
  
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/header" element={<Header/>}/> */}
        </Routes>
      </Router>
    

    
  );
}

export default App;