 import React, {useState } from "react";
 import logo from "../../../../src/assets/images/logo.jpg"
 import { Link } from 'react-router-dom'
import "./Header.css";
import './meanmenu.min.css'

function CollapsibleExample() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <>
    
    <nav className={nav ? 'navigation active' : 'navigation'}>
        <Link to="/" className="logo">
            {/* <img className="logo" src={logo} alt="logo" /> */}
        </Link>
        <input type="checkbox" className="menu-btn" id="menu-btn"/>
        <label for="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><Link className={nav ? 'nav-anchors active' : 'nav-anchors'} to="/">Home</Link></li>
            <li><a className={nav ? 'nav-anchors active' : 'nav-anchors'} href="#">about</a></li>
            <li><a className={nav ? 'nav-anchors active' : 'nav-anchors'} href="#">contact</a></li>
            <li><Link to="/Login_main"  className="nav-btn active-btn-header clr">login</Link></li>
            <li><Link to="/Franchise_main"  className="nav-btn active-btn-header clr">Franchise login</Link></li>
            <li><Link  to="/Register_main" className="nav-btn about-btn clr">register</Link></li>
        </ul>
    </nav>
    </>
   
  );
}

export default CollapsibleExample;
