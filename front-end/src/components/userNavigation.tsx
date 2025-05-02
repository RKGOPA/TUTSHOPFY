import React from "react";
import { Link } from "react-router-dom";
import { FaComments, FaListAlt, FaBoxOpen, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const UserNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/home">Campus Plug</Link>
        
        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/messages">
                <FaComments className="me-2" /> Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/listing">
                <FaListAlt className="me-2" /> Listing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/order-review">
                <FaBoxOpen className="me-2" /> Order Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/notifications">
                <FaBell className="me-2" /> Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/user-account">
                <FaUserCircle className="me-2" /> User Account
              </Link>
            </li>
          </ul>
          <Link to= "/login" className="nav-link d-flex align-items-center">
          <button className="btn btn-danger d-flex align-items-center">
            <FaSignOutAlt className="me-2" /> Logout
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;