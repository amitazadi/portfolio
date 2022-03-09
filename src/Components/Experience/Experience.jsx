import React from "react";
import { Element } from "react-scroll";

import "./experience.css";
import "../Aboutme/aboutme.css";

const Experience = () => {
  return (
    <Element name="experience" className="experience-body">
      <div className="aboutme-heading">
        <div className="aboutme-heading1">Experience</div>
      </div>

      <div className="experience">
        <div className="development-body">
          <div className="experience-heading">Development Experience</div>

          {/* <div className="dev-heading11">ALGORITHMS & DATA STRUCTURES</div> */}

          <div className="dev-heading">FRONTEND DEVELOPMENT</div>
          <div className="dev-subheading">
            HTML, CSS, Reactjs+Redux, Nextjs, TailwindCSS, Reactstrap, React Icons, Chartjs
          </div>

          <div className="dev-heading">BACKEND DEVELOPMENT</div>
          <div className="dev-subheading">Node.js </div>

          <div className="dev-heading">REST APIS</div>
          <div className="dev-subheading">Express.js Framework </div>

          <div className="dev-heading">DATABASES</div>
          <div className="dev-subheading">MongoDB </div>

          <div className="dev-heading">PROGRAMMING LANGUAGE</div>
          <div className="dev-subheading">C++, Javascript </div>

          <div className="dev-heading">TOOLS & SERVICES</div>
          <div className="dev-subheading">Git, Github, Visual Studio, Linux, Postman, Heroku, Netlify </div>
        </div>

        <div className="coding-body">
          <div className="experience-heading">Coding Experience</div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
