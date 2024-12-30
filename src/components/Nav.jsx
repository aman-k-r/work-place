import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CgMenuRightAlt } from "react-icons/cg";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="container mt-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="public/assets/akode..png" alt="" />
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
            <span className="navbar-icon"><CgMenuRightAlt/></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-4 flex-column flex-lg-row">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#edu">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#connect">
                  Connect
                </a>
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/1gZXxf1xZfJIG2ZQm01FdPV7Umgb8pdws/view?usp=drive_link">
            <button className="btn btn-dark resume-btn">
              <div className="resume-cont">Resume</div>
            </button>
          </a>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Nav;
