import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>Home Page</div>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/contact">Contact</Link>
    </>
  )
}

export default Home;