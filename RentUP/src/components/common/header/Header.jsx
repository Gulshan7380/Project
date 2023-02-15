import React, { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { nav } from '../../data/Data';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {
    const [ navList, setNavList ] = useState(false)
  return (
     <>
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <img src='./images/logo.png' alt=''></img>
                </div>
                <div className='nav'>
                    <ul className={navList ? "" : "flex"}>
                        {nav.map((list, index) => (
                            <li key={index}>
                                <Link to={list.path}>{list.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='button flex'>
                    <h4>
                        <span>2</span>My List
                    </h4>
                    <button className='btn1'>
                        <i><LogoutIcon fontSize="small"/></i>Sign In
                    </button>
                </div>
                <div className='toggle'>
                    <button onClick={() => setNavList(!navList)}>
                        {/* <i className='fa fa-bars'></i> */}
                        {navList ? <i><CloseIcon/></i> : <i><MenuIcon/></i>}           
                    </button>
                </div>
            </div>
        </header>
     </>
  )
}

export default Header;