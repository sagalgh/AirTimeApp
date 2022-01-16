import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React Multi-Page Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/map">
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chat">
                  Chat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tsa">
                  TSA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/flight">
                  Flight
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
