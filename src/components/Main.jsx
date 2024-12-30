import React from "react";
import "../styles/Main.css";
import { IoLogoGithub } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>01</h2>
            <h3>card 01</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorem!</p>
            <a href="">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>02</h2>
            <h3>card 02</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorem!</p>
            <a href="">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>03</h2>
            <h3>card 03</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolorem!</p>
            <a href="">Read More</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Main;
