import React from "react";
import { NavbarWrapper } from "./Navbar.styles";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <NavbarWrapper>
      <nav className="navbar navbar-expand-lg border-bottom navbar-light">
        <div className="container py-3">
          <a className="navbar-brand ms-5" href="#">
            <img src={logo} width="31" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse me-5 text-center text-lg-end justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarWrapper>
  );
}

export default Navbar;
