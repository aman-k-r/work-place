import React from "react";
import "../styles/Work.css"
import Workcard from "./Workcard";
import workData from "../data/workData"
const Work = () => {
  return (
    <div  id="work" className="container event-container mt-2">
      <p className="subheading">A Collection of My Builds</p>
      <h2 className="heading">Projects.</h2>
      <div className="row">
        {workData.map((work, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <Workcard
              title = {work.title}
              image1={work.image1}
              image2={work.image2}
              image3={work.image3}
              description={work.description}
              previewLink={work.previewLink}
              sourceCodeLink={work.sourceCodeLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;