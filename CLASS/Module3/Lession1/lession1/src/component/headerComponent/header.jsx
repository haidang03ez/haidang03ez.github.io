import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Logo"
            />
            <strong>React Next</strong>
          </a>
          <div className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Restaurants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Download
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-3">
              <a className="nav-link" href="#">
                Login Now
              </a>
              <button className="btn btn-join">Join Free</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
