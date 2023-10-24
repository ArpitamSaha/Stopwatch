import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="home">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-dark heading" href="/">
            Stopwatch
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
