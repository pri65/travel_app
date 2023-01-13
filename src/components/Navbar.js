import "./NavbarStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
            <li>
                <Link><i class="fa-solid fa-house-user"></i>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;