import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <nav className="Header">
      <NavLink className="Nav-Link" to="/" exact>
        <p className="Logo">{props.title}</p>
      </NavLink>
      <ul className="Nav-Links">
        <li>
          <NavLink className="Nav-Link" to="/Exhibitions" exact>
            EXHIBITIONS
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav-Link" to="/Paintings" exact>
            PAINTINGS
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav-Link" to="/Sculptures" exact>
            SCULPTURES
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav-Link" to="/Contact" exact>
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink className="Nav-Link" to="/About" exact>
            ABOUT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
