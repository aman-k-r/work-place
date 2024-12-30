import React, { useState } from "react";
import vg from "../../public/assets/contact.svg";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Connect.css";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "Portfolio Messages"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div className="container-fluid" id="connect">
      <div className="row">
        <div className="col-md-6 ">
          <section id="con-sec">
            <motion.form
              onSubmit={submitHandler}
              {...animations.form}
              className="con-form d-flex flex-column align-items-center justify-content-center"
            >
              <h3 className="subheading">Approach</h3>
              <h2 className="heading">Contact Me.</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <motion.button
                disabled={disableBtn}
                className={disableBtn ? "disableBtn" : ""}
                {...animations.button}
                type="submit"
              >
                Send
              </motion.button>
            </motion.form>
          </section>
        </div>
        <div className="col-md-6 ">
          <aside className="img-con d-flex align-items-center justify-content-center">
            <img src={vg} alt="Graphics" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Connect;
