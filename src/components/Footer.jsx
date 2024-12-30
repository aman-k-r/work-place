import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-4">
            <div className="fIntro d-flex flex-column">
              <h3 className="text-center">Aman Kumar</h3>
              <p>
                Thank you for exploring my portfolio! Feel free to connect with
                me on social media and let's stay in touch.
              </p>
              <br />
              <p>
                "Success is not final, failure is not fatal: it is the courage
                to continue that counts." — Winston Churchill
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="qLinks d-flex flex-column text-center">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#edu">Education</a>
              <a href="#skills">Skills</a>
              <a href="#work">Work</a>
              <a href="#contact">Connect</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cInfo d-flex flex-column text-center">
              <h3>Contact Info</h3>
              <div className="cont d-flex flex-row gap-4 justify-content-evenly mb-3">
                <a href="https://github.com/aman-k-r/">
                  <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/aman-k-r/">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/eraofaman/">
                  <FaInstagram />
                </a>
                <a href=""></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright text-center">
            <p>&copy; Aman {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
