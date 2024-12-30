import eduData from "../data/eduData";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Education.css";

const Education = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <>
      <div className="container mt-3" id="edu">
        <section className="education-section" ref={sectionRef}>
          <p className="subheading">The Academic Chapters</p>
          <h2 className="heading mb-5">Education.</h2>
          <div
            className="education-list   d-flex flex-column align-items-center"
          >
            {eduData.map(
              (
                edu,
                index // Mapping through eduData directly
              ) => (
                <motion.div
                  className="education-card"
                  key={index}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  variants={cardVariants}
                >
                  <h3 className="instituteName">{edu.name}</h3>
                  <p>
                    <strong>Location:</strong> {edu.location}
                  </p>
                  <p>
                    <strong>Type:</strong> {edu.type}
                  </p>
                  <p>
                    <strong>Session:</strong> {edu.session}
                  </p>
                  <p>
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
