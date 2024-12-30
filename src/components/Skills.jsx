import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaCloud,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import "../styles/Skills.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="skills-section container mt-2" id="skills">
      <p className="subheading">Tools of the Trade</p>
      <h2 className="heading mb-5">My Skills.</h2>

      <div className="skill-category">
        <h3>Frontend Technology</h3>
        <div className="skill-icons">
          <Marquee pauseOnHover="true" pauseOnClick= "true"  >
            <div className="skill-card">
              <FaHtml5 />
              <p>HTML</p>
            </div>
            <div className="skill-card">
              <FaCss3Alt />
              <p>CSS</p>
            </div>
            <div className="skill-card">
              <FaBootstrap />
              <p>Bootstrap</p>
            </div>
            <div className="skill-card">
              <FaReact />
              <p>React</p>
            </div>
            <div className="skill-card">
              <SiNextdotjs />
              <p>Next.js</p>
            </div>
            <div className="skill-card">
              <SiTailwindcss />
              <p>Tailwind</p>
            </div>
            <div className="skill-card">
              <FaCloud />
              <p>RESTful API</p>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend Technology</h3>
        <div className="skill-icons">
          <Marquee  pauseOnHover="true" pauseOnClick= "true" direction="right">
            <div className="skill-card">
              <FaNodeJs />
              <p>Node</p>
            </div>
            <div className="skill-card">
              <SiExpress />
              <p>Express</p>
            </div>
            <div className="skill-card">
              <SiSpringboot />
              <p>Spring Boot</p>
            </div>
            <div className="skill-card">
              <SiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skill-card">
              <RiNextjsFill />
              <p>Next.js</p>
            </div>
            <div className="skill-card">
              <FaCloud />
              <p>RESTful API</p>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="skill-category">
        <h3>Programming Languages</h3>
        <div className="skill-icons">
          <Marquee  pauseOnHover="true" pauseOnClick= "true" >
            <div className="skill-card">
              <FaJava />
              <p>Java</p>
            </div>
            <div className="skill-card">
              <FaJs />
              <p>JavaScript</p>
            </div>
          </Marquee>
        </div>
      </div>

      <div className="skill-category">
        <h3>Other Tools</h3>
        <div className="skill-icons">
          <Marquee  pauseOnHover="true" pauseOnClick= "true" direction="right">
            <div className="skill-card">
              <FaGithub />
              <p>GitHub</p>
            </div>
            <div className="skill-card">
              <FaGitAlt />
              <p>Git Bash</p>
            </div>
            <div className="skill-card">
              <VscVscode />
              <p>VS Code</p>
            </div>
            <div className="skill-card">
              <SiPostman />
              <p>Postman</p>
            </div>
            <div className="skill-card">
              <SiMongodb />
              <p>Compass</p>
            </div>
            <div className="skill-card">
              <SiVercel />
              <p>Vercel</p>
            </div>
            <div className="skill-card">
              <SiNetlify />
              <p>Netlify</p>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
