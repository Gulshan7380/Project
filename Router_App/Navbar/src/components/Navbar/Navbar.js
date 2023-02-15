import React from 'react';
import './Navbar.css';
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuList = MenuList.map(({url, title}, index) =>{
        return (
            <li key={index}>
                <NavLink to={url} >{title}</NavLink>
            </li>
        )
    });
    return (
        <nav>
            <div className='logo'>
                VPN<font>Lab</font>
            </div>
            <div className='menu-icon'>
               <i class="fa fa-bars"></i>
            </div>
            <ul className='menu-list'>{menuList}</ul>
           
        </nav>
    )

}

export default Navbar;
