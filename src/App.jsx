import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Main from "./components/Main";
const App = () => {
  return (
    <>
      <Home />
      <About />
      <Education/>
      <Skills />
      <Work/>
      <Connect/>
      <Footer/>
      {/* <Main></Main> */}
    </>
  );
};

export default App;
