import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';

import Moon from '../../../public/moon.png';
import Sun from '../../../public/sun.svg';


import './NavigationItems.css';

const NavigationItems = props =>{
  return(
  <div>
    <div className="navigation-item">
    <div className="logo">
        <NavLink to="/" >
          <Logo />
        </NavLink>
    </div>
      <div className="menu">
          
          <NavLink to="/projects" className="ninjas" >
          <span className="ninja" aria-label="ninja" role="img">🐱‍👤</span>
            PROJECTS
          </NavLink>
          <NavLink to="/about"  className="ninjas">
          <span className="ninja" aria-label="ninja" role="img">🐱‍👤</span>
            ABOUT ME
          </NavLink>

          <NavLink 
            to="/contact" 
            className="ninjas"      
          >
            <span className="ninja" aria-label="ninja" role="img">🐱‍👤</span>
              CONTACT
          </NavLink>
        </div>
      <div>
      <span className="light"><img src={Sun} alt="" /></span>
      <span className="dark"><img src={Moon} alt="" /></span>
      </div>
  </div>

    <div className="navs">
    <input type="checkbox" className="checkbox"/>
    <input type="checkbox" className="checkbox2"/>
      <div className="hamburgers">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
          <div className="slideMenu">
            <div className="slideMenuTwo">
            
          <NavLink to="/projects" className="ninjas" >
            PROJECTS
          </NavLink>
          <hr/>
          <NavLink to="/about"  className="ninjas">
            ABOUT ME
          </NavLink>
          <hr/>
          <NavLink to="/contact" className="ninjas">
            CONTACT
          </NavLink>
            </div>
          </div>
    </div>
  </div>
);
}


export default NavigationItems;