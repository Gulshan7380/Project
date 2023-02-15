
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../about/About'
import Blog from '../blog/Blog'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer';
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Pricing from '../pricing/Pricing'
import Services from '../services/Services'

const Pages = () => {
  return (
    <>
        <Router>
          <Header/>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route exact path='/about' element={<About/>} />
               <Route exact path='/services' element={<Services/>} />
               <Route exact path='/blog' element={<Blog/>} />
               <Route exact path='/pricing' element={<Pricing/>} />
              <Route exact path='/contact' element={<Contact/>} />
            </Routes>
          <Footer/>  
        </Router>
    </>
  )
}

export default Pages;