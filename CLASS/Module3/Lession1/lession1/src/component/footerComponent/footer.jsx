import React from "react";
import "./Footer.css";

export const Footer = ({ companyName = "company-name", brandName = "brand-name"}) => {
  return (
    <>
      <footer className="bg-white border-top py-3">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-2 mb-lg-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Logo"
              style={{ height: "30px", marginRight: "8px" }}
            />
            <strong className="me-2">{brandName}</strong>
            <span className="text-muted me-1">Copyright © 2025</span>
            <a href="#" className="text-decoration-none">
              {companyName}
            </a>
          </div>

          <ul className="nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Privacy
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
            <div className="d-flex align-items-center">
              <span className="me-2 text-muted">Social:</span>
              <a href="#" className="me-2 text-decoration-none">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  width="20"
                />
              </a>
              <a href="#" className="me-2 text-decoration-none">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  width="20"
                />
              </a>
              <a href="#" className="text-decoration-none">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733544.png"
                  alt="Dribbble"
                  width="20"
                />
              </a>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
};
