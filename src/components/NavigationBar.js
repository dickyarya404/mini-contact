import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="page-wrapper with-navbar mb-20">
      <nav className="navbar justify-content-between">
        <Link to="/" className="navbar-brand">
          ContactApp
        </Link>
        <ul className="navbar-nav d-md-flex">
          <li className="nav-item">
            <Link to="/list-contact" className="nav-link">
              List Kontak
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-contact" className="nav-link">
              Tambah Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
