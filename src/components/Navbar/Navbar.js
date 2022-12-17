import React from "react";
import { NavbarWrapper } from "./Navbar.styles";
import logo from "../../assets/logo.svg";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

function Navbar({ setIsOpen }) {
  const location = useLocation();
  return (
    <NavbarWrapper>
      <nav className="navbar navbar-expand-lg border-bottom navbar-light">
        <div className="container py-3">
          <Link className="navbar-brand ms-5" to="/">
            <img src={logo} width="31" alt="logo" />
            <span className="ms-2">MakerSpace</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse me-5 text-center text-lg-end justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={classNames("nav-link", {
                    active: location.pathname === "/",
                  })}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/library"
                  className={classNames("nav-link", {
                    active: location.pathname === "/library",
                  })}
                >
                  Library
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={classNames("nav-link", {
                    active: location.pathname === "/about",
                  })}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={classNames("nav-link", {
                    active: location.pathname === "/contact",
                  })}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <span onClick={() => setIsOpen(true)} className="nav-link">
                  🚀 Subscribe
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarWrapper>
  );
}

export default Navbar;
