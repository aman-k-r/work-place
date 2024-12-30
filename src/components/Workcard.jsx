import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaRegEye,FaCode } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import "../styles/Workcard.css";
import VanillaTilt from "vanilla-tilt";

const Workcard = ({title,image1,image2,image3,description,previewLink,sourceCodeLink}) => {

  const controls = useAnimation();
  const descriptionRef = useRef(null);

  useEffect(() => {
    const startAutoScroll = () => {
      const scrollHeight =
        descriptionRef.current.scrollHeight -
        descriptionRef.current.clientHeight;
      controls.start({
        y: -scrollHeight,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAutoScroll();
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // Pause animation on hover
  };

  const handleMouseLeave = () => {
    const scrollHeight =
      descriptionRef.current.scrollHeight - descriptionRef.current.clientHeight;
    controls.start({
      y: -scrollHeight,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };
  useEffect(() => {
    const elements = document.querySelectorAll(".card-container");
    VanillaTilt.init(elements, {
      max: 15, // Maximum tilt angle
      speed: 400, // Speed of the effect
      glare: true, // Enable glare effect
      "max-glare": 0.5, // Max glare opacity
    });

    // Cleanup to remove listeners when the component unmounts
    return () => {
      elements.forEach((el) => el.vanillaTilt?.destroy());
    };
  }, []);



  return (
    <>
      <div className="card-container">
        <div className="heading">
          <h3 className="mx-auto">{title}</h3>
        </div>

        {/* Carousel */}
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                alt={title}
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt={title}
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                alt={title}
              />
            </div>
          </div>
        </div>

        <div
              className="card-description para"
              ref={descriptionRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.p
                animate={controls}
                initial={{ y: 0 }}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre-line", 
                }}
              >
                {description}
              </motion.p>
            </div>

        <div className="icons-container d-flex justify-content-center gap-3 ">
          <a href={previewLink}>
            <FaRegEye />
          </a>
          <a href={sourceCodeLink}>
            <FaCode />
          </a>
        </div>
      </div>
    </>
  );
};

export default Workcard;
