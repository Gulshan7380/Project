import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ top: 0 }}>
      <div>
        <div>
          am from header
          Add Logo
        </div>
        <NavLink to="home">Home</NavLink> &nbsp;
        <NavLink to="profile">Profile</NavLink> &nbsp;
        <NavLink to="contactUs">ContactUs</NavLink> &nbsp;
        <NavLink to="signUp">SignUp</NavLink> &nbsp;
      </div>
    </div>
  )
}

export default Header;