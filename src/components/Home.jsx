import React, { useState, useEffect } from "react";
import { motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoLogoGithub } from "react-icons/io";
import "../styles/Home.css";
import Nav from "./Nav";
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // Background should appear behind the navbar
      setLoaderVisible(false); // Hide the loader
    } else {
      setScrolled(false); // Background should not appear behind the navbar
      setLoaderVisible(true); // Show the loader
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center home">
        <div className={`fixed-top ${scrolled ? "scrolled" : ""}`}>
          <Nav />
        </div>

        <div>
          <div>
            <motion.h1 {...animation.h1} className="name text-center">
              Hi, I'm
              <span> Aman</span>
            </motion.h1>
          </div>
          <div className="align-self-start">
            <Typewriter
              options={{
                strings: [
                  "A Programmer_",
                  "A Coder_",
                  "A Full Stack Developer_",
                  "A Frontend Developer_",
                  "A Web Designer_",
                  "A Freelancer_",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara ",
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly  gap-4 mt-5 homeLinksCont">
            <button className="firstbtn">
              <a href="mailto:amankumarraj800@gmail.com">Unite to Create</a>
            </button>
            <div className="button-icon">
              <div className="icon">
                <IoLogoGithub />
              </div>
              <div className="cube">
                <span className="side front">My Builds</span>
                <span className="side top">Check it on Github</span>
              </div>
            </div>
          </div>
        </div>

        {loaderVisible && (
          <div className="loader text-center fixed-bottom mb-5">
            <span>&lt;</span>
            <span>Explore More Below</span>
            <span>/&gt;</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
