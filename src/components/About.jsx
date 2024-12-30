import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { PiReadCvLogoLight } from "react-icons/pi";

import "../styles/About.css";

const About = () => {
  return (
    <>
      <div
        className="container mt-2 d-flex flex-column align-items-center "
        id="about"
      >
        <p className="subheading">My Story so far</p>
        <h2 className="heading mb-4">Introduction.</h2>
        <p>
          I'm a passionate developer, who enjoys building scalable web
          applications. I love learning about new technologies and constantly
          improving my skills. Right now, I'm focusing on full-stack
          development, using modern JavaScript frameworks and libraries to
          create engaging and efficient user experiences. In addition to
          JavaScript, I have a strong foundation in Java, which I also use for
          backend development and problem solving, creating robust and reliable
          applications. I have a solid understanding of data structures and
          algorithms, which allows me to solve problems effectively and write
          efficient, optimized code.
          <br />
          <br />
          I'm all about creating efficient, engaging, and reliable solutions.
          Let's just say, if coding were a sport, I'd be aiming for MVP!
        </p>

        <div className="icons-container d-flex flex-row ">
            <a href="https://drive.google.com/file/d/1gZXxf1xZfJIG2ZQm01FdPV7Umgb8pdws/view?usp=drive_link">
                <PiReadCvLogoLight />
            </a>
            <a href="mailto:amankumarraj800@gmail.com">
              <CiMail />
            </a>
            <a href="https://www.linkedin.com/in/aman-k-r/">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/aman-k-r/">
              <FaGithub />
            </a>
            <a href="https://www.geeksforgeeks.org/user/gfgofaman/">
              <SiGeeksforgeeks />
            </a>
            <a href="https://leetcode.com/u/lcofaman/">
              <SiLeetcode />
            </a>
        </div>
      </div>
    </>
  );
};

export default About;
