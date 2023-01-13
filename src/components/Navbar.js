import "./NavbarStyles.css";
import React from "react";
import { MenuItems } from './MenuItems';

const Navbar = () => {
  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                    <a href={item.url}>
                    <i className= {item.icon}></i>{item.title}
                    </a>
                </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar;