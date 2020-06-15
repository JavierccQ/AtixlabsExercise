import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar">
        <a className="navbar-brand NavTextColor brandMarg" href="#">
          Oniblue
        </a>        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0 NavTextMarg">
            <li className="nav-item ">
              <a className="nav-link NavTextColor" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link NavTextColor" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link NavTextColor " href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link NavTextColor " href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link NavTextColor" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-info firstBtn">Login</button>
          <button type="button" className="btn btn-light secondBtn">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
