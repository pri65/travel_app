import "./NavbarStyles.css";
import React from "react";
import { MenuItems } from './MenuItems';

const Navbar = () => {
  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
        </div>
        <ul className="nav-menu">
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                    <a className={item.cName} href={item.url}>
                    <i className= {item.icon}></i>{item.title}
                    </a>
                </li>
                );
            })}
            <button>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar;